import { Navigate, Outlet } from "react-router-dom";
import { useAuthProvider } from "../../context/Auth";

export function PrivateRoute() {
  const { status } = useAuthProvider();

  // if (status === "pending") return <LoadingScreen />;
  if (status === "unauthorized") return <Navigate to={"/"} />;

  return <Outlet />;
}
