import Cookies from "js-cookie";
import { Navigate, Route, RouteProps, Outlet } from "react-router-dom";
import { validSession } from "../utils/auth/validSession";

export function PrivateRoute() {
  const session = Cookies.get("session");

  if (!session || !validSession(session)) {
    return <Navigate to={"/login"} />;
  }

  return <Outlet />;
};