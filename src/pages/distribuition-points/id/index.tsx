import React from "react";
import { Button } from "../../../components/common";
import { TableProducts } from "../../../components/tables/table-products";
import { useNavigate, useParams } from "react-router-dom";
import { LoadingScreen } from "../../../components/common/LoadingScreen";
import { listProductsByDistribuitionPoint } from "../../../services/distribuition-points.service";
import { IProduct, IProductCreate } from "../../../interfaces/products";
import { Search } from "../../../components/search";
import { ModalProduct } from "../../../components/modals/Product";
import { createProduct } from "../../../services/products.service";

interface IProductsInitialData {
  data: IProduct[];
  total: number;
}

const initialData = {
  data: [],
  total: 0,
};

function ProductsScreen() {
  const navigate = useNavigate();
  const { id } = useParams();

  const filter = React.useRef({});

  const [openModal, setOpenModal] = React.useState<boolean>(false);
  const [requesting, setRequesting] = React.useState<boolean>(false);
  const [products, setProducts] = React.useState<IProductsInitialData>(initialData);

  const handleFilter = async (data: any) => {
    filter.current = data;

    try {
      setRequesting(true);
    } catch (error) {
      console.error(error);
    } finally {
      setRequesting(false);
    }
  };

  const handleProduct = async (data: IProductCreate) => {
    try {
      setRequesting(true);
      console.log(data);
      // const resp = await createProduct(data);
      // console.log(resp);
    } catch (error) {
      console.error(error);
    } finally {
      setRequesting(false);
    }
  };

  const load = async () => {
    try {
      setRequesting(true);
      const resp = await listProductsByDistribuitionPoint(id || "");

      console.log(resp);

      setProducts(resp);
    } catch (error) {
      console.error(error);
      navigate("/distribuition-points");
    } finally {
      setRequesting(false);
    }
  };

  React.useEffect(() => {
    load();
  }, []);

  if (requesting) {
    return <LoadingScreen />;
  }

  return (
    <div className="py-8">
      <div className="my-5">
        <p className="font-semibold mb-2">Filtrar por</p>
        <div
          className={`
            flex flex-col gap-4 md:flex-row
          `}
        >
          <Search
            className="grid gap-4 grid-cols-1 md:grid-cols-3 w-full"
            onFilter={handleFilter}
            options={[
              {
                optionKey: "teste1",
                type: "select",
                options: [
                  { label: "teste1", value: "teste1" },
                  { label: "teste2", value: "teste2" },
                  { label: "teste3", value: "teste3" },
                ],
              },
              {
                optionKey: "teste2",
                type: "select",
                options: [
                  { label: "teste1", value: "teste1" },
                  { label: "teste2", value: "teste2" },
                  { label: "teste3", value: "teste3" },
                ],
              },
              {
                optionKey: "teste 3",
                type: "select",
                options: [
                  { label: "teste1", value: "teste1" },
                  { label: "teste2", value: "teste2" },
                  { label: "teste3", value: "teste3" },
                ],
              },
            ]}
          />

          <Button
            text="Nova necessidade"
            className="bg-black text-white"
            onClick={() => setOpenModal(true)}
          />
        </div>
      </div>

      <div>
        <TableProducts
          dataSource={[
            {
              title: "teste",
              dataIndex: "",
            },
          ]}
        />
      </div>

      <ModalProduct
        open={openModal}
        close={() => setOpenModal(false)}
        onSubmit={handleProduct}
      />
    </div>
  );
}

export default ProductsScreen;
