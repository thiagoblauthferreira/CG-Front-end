import { IAddress } from "./address";
import { IUser } from "./user";

export interface IShelterCreate {
  id: string;
  name: string;
  phone: string;
  description?: string;
  address: IAddress;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface IShelterUpdate {
  phone: string;
  name: string;
  description?: string;
  address: IAddress;
}

export interface IShelter {
  id: string;
  name: string;
  phone: string;
  description?: string;
  address: IAddress;
  creator: IUser;
  coordinators: IUser[];
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}