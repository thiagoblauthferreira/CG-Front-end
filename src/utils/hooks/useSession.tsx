import { useState, useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { ApiHandler } from "../apis/api.handler";
import Cookies from "js-cookie";

export function useSession() {
  const session = Cookies.get("session");
  const [user, setUser] = useState<any>();
  const [status, setStatus] = useState<"pending"|"authorized"|"unauthorized">("pending");

  useEffect(() => {
    async function getUser() {
      if (!session || user) return;

      setUser(await ApiHandler.getUser(session));
    }

    getUser();
  }, []);

  if(status !== "pending") return {user, status}

  if (user?.status === 200) {
    setStatus("authorized");
    return {user, status}
  }
  
  if (user?.statusCode === 401 || !session) {
    setStatus("unauthorized");
    return {user, status}
  }

  return { user, status };
}
