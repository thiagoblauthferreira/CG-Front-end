import React from "react";
import { IAuthProvider, IContextProvider } from "./interface";
import { IUser } from "../../interfaces/user";

const AuthContext = React.createContext<IAuthProvider>({} as IAuthProvider);

export const AuthProvider = ({ children }: IContextProvider) => {
  const [currentUser, setCurrentUser] = React.useState<IUser | null>(null);

  return <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>;
};

export const useAuthProvider = () => {
  return React.useContext(AuthContext);
};
