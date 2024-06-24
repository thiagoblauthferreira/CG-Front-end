import { Navigate, Outlet } from "react-router-dom";
import { LoadingScreen } from "../../utils/screens/LoadingScreen";
import { useSession } from "../../utils/hooks/useSession";

export function PrivateRoute() {
  const { user, status } = useSession();

  if (status === "pending") return <LoadingScreen />;
  if (status === "unauthorized") return <Navigate to={"/"} />;

  return <Outlet context={user.data} />;
}