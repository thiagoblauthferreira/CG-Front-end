import { Navigate, Outlet } from "react-router-dom";
import { useAuthProvider } from "../../context/Auth";

export function AuthRoute() {
  const { status, currentUser } = useAuthProvider();

  // if (status === "pending") return <LoadingScreen />;
  // if (currentUser) return <Navigate to={"/shelters"} />;

  return <Outlet />;
}
