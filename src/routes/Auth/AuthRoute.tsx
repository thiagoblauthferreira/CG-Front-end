import { Navigate, Outlet } from "react-router-dom";
import { useAuthProvider } from "../../context/Auth";

export function AuthRoute() {
  const { status } = useAuthProvider();

  // if (status === "pending") return <LoadingScreen />;
  if (status === "authorized") return <Navigate to={"/home"} />;

  return <Outlet />;
}
