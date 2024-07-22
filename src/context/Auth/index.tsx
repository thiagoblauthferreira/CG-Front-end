import React from "react";
import { IAuthProvider, IContextProvider } from "./interface";
import { IUser } from "../../interfaces/user";
import { getUser } from "../../services/user.service";
import { getCookie } from "../../services/cookie.service";

const AuthContext = React.createContext<IAuthProvider>({} as IAuthProvider);

export function AuthProvider({ children }: IContextProvider) {
  const [currentUser, setCurrentUser] = React.useState<IUser | null>(null);

  const loadUser = async () => {
    try {
      const token = getCookie("token")
      if(!token) return 
      
      const resp = await getUser()
      console.log(resp, "user")
      setCurrentUser(resp.data)
    } catch (error) {
      console.error(error)
    }
  }

  React.useEffect(() => {
    loadUser()
  },[])

  return <AuthContext.Provider value={{ currentUser }}>{children}</AuthContext.Provider>;
};

export const useAuthProvider = () => {
  return React.useContext(AuthContext);
};
