import { IDistribuitionPoint } from "./distriuition-points";
import { IUser } from "./user";

export type ProductType = "perishable" | "not_perishable";
export interface IProductCreate {
  id: string;
  name: string;
  type: ProductType;
  quantity: number;
  weight: string;
  description: string;
  distribuitionPointId: string;
}

export interface IProductUpdate {
  name: string;
  type: ProductType;
  quantity: number;
  weight: string;
  description: string;
}

export interface IProduct {
  id: string;
  name: string;
  type: ProductType;
  quantity: number;
  weight?: string;
  description?: string;
  creator: IUser;
  distribuitionPoint?: Omit<IDistribuitionPoint, "products">;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
}
