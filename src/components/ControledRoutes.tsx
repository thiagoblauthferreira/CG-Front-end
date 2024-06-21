import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";
import { ApiHandler } from "../utils/apis/api.handler";
import { effect, signal } from "@preact/signals-react";
import { LoadingScreen } from "../utils/screens/LoadingScreen";
import { useEffect, useState } from "react";
import { useSession } from "../utils/hooks/useSession";

export function PrivateRoute() {
  const { user, status } = useSession();

  if (status === "pending") return <LoadingScreen />;
  if (status === "unauthorized") return <Navigate to={"/login"} />;

  return <Outlet context={user.data} />;
}
