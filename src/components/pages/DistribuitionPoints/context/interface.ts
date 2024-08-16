import {
  IDistribuitionPoint,
  IDistribuitionPointUpdate,
} from "../../../../interfaces/distriuition-points";
import {
  IProduct,
  IProductCreate,
  IProductUpdate,
} from "../../../../interfaces/products";

export interface IProductsInitialData {
  data: IProduct[];
  total: number;
}

export interface IDistribuitionPointProvider {
  setOpenModalProduct: (event: boolean) => void;
  handleFilter: (data: any) => void;
  handleCreateProduct: (data: IProductCreate) => void;
  handleUpdateProduct: (productId: string, data: IProductUpdate) => void;
  handleDeleteProduct: (productId: string) => void;
  handleUpdateDistribuitionPoint: (data: IDistribuitionPointUpdate) => void;
  openModalProduct: boolean;
  products: IProductsInitialData;
  distribuitionPoint?: IDistribuitionPoint;
}

export interface IContextProvider {
  children: React.ReactNode;
}
