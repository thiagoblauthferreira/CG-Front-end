import React from "react";
import {
  IContextProvider,
  IDistribuitionPointProvider,
  IProductsInitialData,
} from "./interface";
import { LoadingScreen } from "../../../common";
import {
  listOneDistribuitionPoint,
  updateDistribuitionPoints,
} from "../../../../services/distribuition-points.service";
import { IProductCreate, IProductUpdate } from "../../../../interfaces/products";
import {
  IDistribuitionPoint,
  IDistribuitionPointUpdate,
} from "../../../../interfaces/distriuition-points";
import { useNavigate, useParams } from "react-router-dom";
import {
  createProduct,
  deleteProduct,
  listOneProduct,
  listProducts,
  updateProduct,
} from "../../../../services/products.service";

const DistribuitionPointContext = React.createContext<IDistribuitionPointProvider>(
  {} as IDistribuitionPointProvider
);

const initialData = {
  data: [],
  total: 0,
};

export function DistribuitionPointProvider({ children }: IContextProvider) {
  const navigate = useNavigate();
  const { id = "" } = useParams();

  const filter = React.useRef({});

  const [openModalProduct, setOpenModalProduct] = React.useState<boolean>(false);
  const [openModalUpdateProduct, setOpenModalUpdateProduct] =
    React.useState<boolean>(false);
  const [requesting, setRequesting] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(true);
  const [products, setProducts] = React.useState<IProductsInitialData>(initialData);
  const [distribuitionPoint, setDistribuitionPoint] =
    React.useState<IDistribuitionPoint>();

  const handleFilter = async (data: any) => {
    if (requesting) return;

    filter.current = data;

    try {
      setRequesting(true);
      const resp = await listProducts(data);
      setProducts(resp);
      console.log(data);
    } catch (error) {
      console.error(error);
    } finally {
      setRequesting(false);
    }
  };

  const handleUpdateDistribuitionPoint = async (data: IDistribuitionPointUpdate) => {
    console.log(data);
    if (requesting) return;

    try {
      setRequesting(true);
      await updateDistribuitionPoints(id, data);
    } catch (error) {
      console.error(error);
    } finally {
      setRequesting(false);
    }
  };

  const handleCreateProduct = async (data: IProductCreate) => {
    if (requesting) return;

    const newData = { ...data, distribuitionPointId: id };
    console.log(newData);

    try {
      setRequesting(true);

      const respProduct = await createProduct(newData);

      setProducts((currentProducts) => {
        return {
          data: [respProduct, ...currentProducts.data],
          total: currentProducts.total + 1,
        };
      });
      setOpenModalProduct(false);
    } catch (error) {
      console.error(error);
    } finally {
      setRequesting(false);
    }
  };

  const handleUpdateProduct = async (productId: string, data: IProductUpdate) => {
    if (requesting) return;

    const newData = { ...data, distribuitionPointId: id };
    console.log(newData);

    try {
      setRequesting(true);

      const respProduct = await updateProduct(productId, newData);

      setProducts((currentProducts) => {
        const productsData = currentProducts.data;
        const filteredProducts = productsData.map((product) => {
          if (product.id === productId) {
            return { ...product, ...respProduct };
          }
          return product;
        });

        return {
          ...currentProducts,
          data: filteredProducts,
        };
      });
      setOpenModalProduct(false);
    } catch (error) {
      console.error(error);
    } finally {
      setRequesting(false);
    }
  };

  const handleDeleteProduct = async (productId: string) => {
    if (requesting) return;

    try {
      setRequesting(true);

      await deleteProduct(productId);

      setProducts((currentProducts) => {
        const productsData = currentProducts.data;
        const filteredProducts = productsData.filter(
          (product) => product.id !== productId
        );
        return { data: filteredProducts, total: currentProducts.total - 1 };
      });
    } catch (error) {
      console.error(error);
    } finally {
      setRequesting(false);
    }
  };

  const handleProduct = async (productId: string) => {
    if (requesting) return;

    try {
      setRequesting(true);

      const respProduct = await listOneProduct(productId);

      return respProduct;
    } catch (error) {
      console.error(error);
    } finally {
      setRequesting(false);
    }
  };

  const load = async () => {
    try {
      setLoading(true);

      const [respProducts, respDistribuitionPoint] = await Promise.all([
        listProducts({ distribuitionPointId: id }),
        listOneDistribuitionPoint(id || ""),
      ]);

      setProducts(respProducts);
      setDistribuitionPoint(respDistribuitionPoint);
    } catch (error) {
      console.error(error);
      // navigate("/distribuition-points");
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    load();
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <DistribuitionPointContext.Provider
      value={{
        handleFilter,
        setOpenModalProduct,
        setOpenModalUpdateProduct,
        handleCreateProduct,
        handleUpdateProduct,
        handleDeleteProduct,
        handleProduct,
        handleUpdateDistribuitionPoint,
        products,
        openModalProduct,
        openModalUpdateProduct,
        distribuitionPoint,
        requesting,
      }}
    >
      {children}
    </DistribuitionPointContext.Provider>
  );
}

export const useDistribuitionPointProvider = () => {
  return React.useContext(DistribuitionPointContext);
};
