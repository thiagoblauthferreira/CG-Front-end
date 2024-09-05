import React from "react";
import {
  IContextProvider,
  ICoordinatorsInitialData,
  IShelterProvider,
} from "./interface";
import { IShelterUpdate } from "../../../../interfaces/shelter";
import { useNavigate, useParams } from "react-router-dom";
import { toastMessage } from "../../../../helpers/toast-message";
import { toast } from "react-toastify";
import {
  deleteShelter,
  listCoordinators,
  updateShelter,
} from "../../../../services/shelter.service";
import { IPaginate } from "../../../common/Table/interface";

const initialData = {
  data: [],
  total: 0,
};

const ShelterContext = React.createContext<IShelterProvider>({} as IShelterProvider);

export function ShelterProvider({
  children,
  initialCoordinators,
  shelter,
}: IContextProvider) {
  const { id = "" } = useParams();
  const navigation = useNavigate();

  const filteredRef = React.useRef({});

  const [requesting, setRequesting] = React.useState<boolean>(false);

  const [openModalConfirmActionS, setOpenModalConfirmActionS] =
    React.useState<boolean>(false);
  const [coordinators, setCoordinators] =
    React.useState<ICoordinatorsInitialData>(initialData);

  const handleFilter = async (filter: any) => {
    filteredRef.current = filter;

    try {
      setRequesting(true);

      const resp = await listCoordinators(id, filteredRef.current);
      setCoordinators(resp);
    } catch (error) {
      console.error(error);
      toast.error(toastMessage.INTERNAL_SERVER_ERROR);
    } finally {
      setRequesting(false);
    }
  };

  const handleCoordinators = async (pagination?: IPaginate) => {
    if (requesting) {
      toast.warn(toastMessage.REQUESTING);
      return;
    }

    filteredRef.current = { ...filteredRef.current, ...pagination };

    try {
      setRequesting(true);

      const resp = await listCoordinators(id, filteredRef.current);
      setCoordinators(resp);
    } catch (error) {
      console.error(error);
      toast.error(toastMessage.INTERNAL_SERVER_ERROR);
    } finally {
      setRequesting(false);
    }
  };

  const handleUpdateShelter = async (data: IShelterUpdate) => {
    if (requesting) {
      toast.warn(toastMessage.REQUESTING);
      return;
    }

    try {
      setRequesting(true);
      await updateShelter(id, data);

      toast.success("Abrigo atualizado");
    } catch (error) {
      console.error(error);
      toast.error(toastMessage.INTERNAL_SERVER_ERROR);
    } finally {
      setRequesting(false);
    }
  };

  const handleDeleteShelter = async (shelterId: string) => {
    if (requesting) {
      toast.warn(toastMessage.REQUESTING);
      return;
    }

    try {
      setRequesting(true);

      await deleteShelter(shelterId);

      setOpenModalConfirmActionS(false);

      toast.success("Abrigo deletado");
      navigation("/");
    } catch (error) {
      console.error(error);
      toast.error(toastMessage.INTERNAL_SERVER_ERROR);
    } finally {
      setRequesting(false);
    }
  };

  React.useEffect(() => {
    setCoordinators(initialCoordinators);
  }, [initialCoordinators]);

  return (
    <ShelterContext.Provider
      value={{
        handleUpdateShelter,
        handleFilter,
        handleCoordinators,
        setOpenModalConfirmActionS,
        handleDeleteShelter,
        shelter,
        coordinators,
        openModalConfirmActionS,
        requesting,
      }}
    >
      {children}
    </ShelterContext.Provider>
  );
}

export const useShelterProvider = () => {
  return React.useContext(ShelterContext);
};
