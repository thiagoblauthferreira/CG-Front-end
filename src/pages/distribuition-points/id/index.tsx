import React from "react";
import { LoadingScreen, Tabs } from "../../../components/common";
import {
  TabDistribuitionPointSettings,
  TabProducts,
  TabDistribuitionPointDetails,
} from "../../../components/pages/DistribuitionPoints/tabs";
import { DistribuitionPointProvider } from "../../../components/pages/DistribuitionPoints/context";
import { useAuthProvider } from "../../../context/Auth";
import { useNavigate, useParams } from "react-router-dom";
import { listOneDistribuitionPoint } from "../../../services/distribuition-points.service";
import { IDistribuitionPoint } from "../../../interfaces/distriuition-points";
import { IProductsInitialData } from "../../../components/pages/DistribuitionPoints/context/interface";
import { listProducts } from "../../../services/products.service";
import { toast } from "react-toastify";
import { toastMessage } from "../../../helpers/toast-message";

const initialData = {
  data: [],
  total: 0,
};

function ProductsScreen() {
  const navigation = useNavigate();
  const { id = "" } = useParams();
  const { currentUser } = useAuthProvider();

  const [loading, setLoading] = React.useState<boolean>(true);

  const [initialProducts, setInitialProducts] =
    React.useState<IProductsInitialData>(initialData);
  const [distribuitionPoint, setDistribuitionPoint] =
    React.useState<IDistribuitionPoint>();

  const load = async () => {
    try {
      setLoading(true);

      const [respDistribuitionPoint, respProducts] = await Promise.all([
        listOneDistribuitionPoint(id || ""),
        listProducts({ distribuitionPointId: id }),
      ]);

      setDistribuitionPoint(respDistribuitionPoint);
      setInitialProducts(respProducts);
    } catch (error) {
      console.error(error);
      toast.success(toastMessage.PAGE_NOT_FOUND);
      navigation("/distribuition-points");
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
      children: <TabDistribuitionPointDetails />,
    },
    {
      key: "products",
      label: "Produtos",
      children: <TabProducts />,
    },
  ];

  if (distribuitionPoint && distribuitionPoint.creator.id === currentUser?.id) {
    tabs.push({
      key: "settings",
      label: "Atualizar",
      children: <TabDistribuitionPointSettings />,
    });
  }

  return (
    <DistribuitionPointProvider
      distribuitionPoint={distribuitionPoint}
      initialProducts={initialProducts}
    >
      <LoadingScreen loading={loading} />
      <div className="py-8">
        <Tabs tabs={tabs} />
      </div>
    </DistribuitionPointProvider>
  );
}

export default ProductsScreen;
