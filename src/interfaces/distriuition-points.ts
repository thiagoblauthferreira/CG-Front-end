import { IAddress } from "./address";
import { IProduct } from "./products";
import { IUser } from "./user";

export interface IDistribuitionPointCreate {
  id: string;
  phone: string;
  name: string;
  description?: string;
  address: IAddress;
}

export interface IDistribuitionPointUpdate {
  phone: string;
  name: string;
  description?: string;
  address: IAddress;
}

export interface IDistribuitionPoint {
  id: string;
  phone: string;
  name: string;
  description?: string;
  creator: IUser;
  address: IAddress;
  products?: IProduct[];
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}
