import React from "react";
import {
  IContextProvider,
  ICoordinatorsInitialData,
  IShelterProvider,
} from "./interface";
import { IShelterUpdate } from "../../../../interfaces/shelter";
import { useParams } from "react-router-dom";
import { toastMessage } from "../../../../helpers/toast-message";
import { toast } from "react-toastify";
import { updateShelter } from "../../../../services/shelter.service";

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

  const filteredRef = React.useRef({});

  const [requesting, setRequesting] = React.useState<boolean>(false);

  const [coordinators, setCoordinators] =
    React.useState<ICoordinatorsInitialData>(initialData);

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

  React.useEffect(() => {
    setCoordinators(initialCoordinators);
  }, [initialCoordinators]);

  return (
    <ShelterContext.Provider value={{ handleUpdateShelter, shelter, coordinators }}>
      {children}
    </ShelterContext.Provider>
  );
}

export const useShelterProvider = () => {
  return React.useContext(ShelterContext);
};
