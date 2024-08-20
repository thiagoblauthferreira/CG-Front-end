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
  setOpenModalUpdateProduct: (event: boolean) => void;
  handleFilter: (data: any) => void;
  handleCreateProduct: (data: IProductCreate) => void;
  handleUpdateProduct: (productId: string, data: IProductUpdate) => void;
  handleDeleteProduct: (productId: string) => void;
  handleProduct: (productId: string) => Promise<IProduct>;
  handleUpdateDistribuitionPoint: (data: IDistribuitionPointUpdate) => void;
  openModalProduct: boolean;
  openModalUpdateProduct: boolean;
  products: IProductsInitialData;
  distribuitionPoint?: IDistribuitionPoint;
  requesting: boolean;
}

export interface IContextProvider {
  children: React.ReactNode;
}
