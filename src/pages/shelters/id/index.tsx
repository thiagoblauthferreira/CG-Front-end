import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ShelterProvider } from "../../../components/pages/Shelters/context";
import { useAuthProvider } from "../../../context/Auth";
import { LoadingScreen, Tabs } from "../../../components/common";
import { ICoordinatorsInitialData } from "../../../components/pages/Shelters/context/interface";
import { IShelter } from "../../../interfaces/shelter";
import { toast } from "react-toastify";
import { listOneShelter } from "../../../services/shelter.service";
import { TabShelterSettings } from "../../../components/pages/Shelters/tabs";

const initialData = {
  data: [],
  total: 0,
};

function CoordinatorsScreen() {
  const navigation = useNavigate();
  const { id = "" } = useParams();
  const { currentUser } = useAuthProvider();

  const [loading, setLoading] = React.useState<boolean>(true);

  const [initialCoordinators, setInitialCoordinators] =
    React.useState<ICoordinatorsInitialData>(initialData);
  const [shelter, setShelter] = React.useState<IShelter>();

  const load = async () => {
    try {
      setLoading(true);

      const [respShelter] = await Promise.all([
        listOneShelter(id || ""),
        // listProducts({ distribuitionPointId: id }),
      ]);

      setShelter(respShelter);
      // setInitialCoordinators(respCoordinators);
    } catch (error) {
      console.error(error);
      toast.warn("Abrigo não encontrado");
      navigation("/shelters");
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    load();
  }, []);

  const tabs = [
    {
      key: "details",
      label: "Detalhes",
      children: <></>,
    },
    {
      key: "coordinators",
      label: "Coordenadores",
      children: <></>,
    },
  ];

  if (shelter && shelter.creator.id === currentUser?.id) {
    tabs.push({
      key: "settings",
      label: "Atualizar",
      children: <TabShelterSettings />,
    });
  }

  return (
    <ShelterProvider shelter={shelter} initialCoordinators={initialCoordinators}>
      <LoadingScreen loading={loading} />
      <div className="py-8">
        <Tabs tabs={tabs} />
      </div>
    </ShelterProvider>
  );
}

export default CoordinatorsScreen;
