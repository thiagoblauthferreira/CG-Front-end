import {
  IDistribuitionPoint,
  IDistribuitionPointUpdate,
} from "../../../../interfaces/distriuition-points";
import {
  IProduct,
  IProductCreate,
  IProductUpdate,
} from "../../../../interfaces/products";
import { IPaginate } from "../../../common/Table/interface";

export interface IProductsInitialData {
  data: IProduct[];
  total: number;
}

export interface IDistribuitionPointProvider {
  setOpenModalProduct: (event: boolean) => void;
  setOpenModalUpdateProduct: (event: boolean) => void;
  setOpenModalConfirmActionProduct: (event: boolean) => void;
  handleFilter: (data: any) => void;
  handleProducts: (data: IPaginate) => void;
  handleCreateProduct: (data: IProductCreate) => void;
  handleUpdateProduct: (productId: string, data: IProductUpdate) => void;
  handleDeleteProduct: (productId: string) => void;
  handleProduct: (productId: string) => Promise<IProduct>;
  handleUpdateDistribuitionPoint: (data: IDistribuitionPointUpdate) => void;
  openModalProduct: boolean;
  openModalUpdateProduct: boolean;
  openModalConfirmActionProduct: boolean;
  products: IProductsInitialData;
  distribuitionPoint?: IDistribuitionPoint;
  requesting: boolean;
}

export interface IContextProvider {
  children: React.ReactNode;
  distribuitionPoint?: IDistribuitionPoint;
  initialProducts: IProductsInitialData;
}
