import { ReactNode } from "react";
import { IUser } from "../../interfaces/user";

export interface IAuthProvider {
  currentUser: IUser | null;
}

export interface IContextProvider {
  children: ReactNode;
}
