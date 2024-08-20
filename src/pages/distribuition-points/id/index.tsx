import { Tabs } from "../../../components/common";
import { TabProducts } from "../../../components/pages/DistribuitionPoints/TabProducts";
import { TabDistribuitionPointSettings } from "../../../components/pages/DistribuitionPoints/TabDistribuitionPointsSettings";
import { DistribuitionPointProvider } from "../../../components/pages/DistribuitionPoints/context";
import { useAuthProvider } from "../../../context/Auth";

function ProductsScreen() {
  const { currentUser } = useAuthProvider();

  const tabs = [
    {
      key: "products",
      label: "Produtos",
      children: <TabProducts />,
    },
    {
      key: "products_settings",
      label: "Ponto de distribuição",
      children: <TabDistribuitionPointSettings />,
    },
  ];

  return (
    <DistribuitionPointProvider>
      <div className="py-8">
        <Tabs tabs={tabs} />
      </div>
    </DistribuitionPointProvider>
  );
}

export default ProductsScreen;
