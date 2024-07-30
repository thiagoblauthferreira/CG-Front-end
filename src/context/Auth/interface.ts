import { ReactNode } from "react";
import { IUser } from "../../interfaces/user";

export interface IAuthProvider {
  currentUser: IUser | null;
  logout: () => void;
  status: string;
}

export interface IContextProvider {
  children: ReactNode;
}
