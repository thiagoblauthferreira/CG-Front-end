import { useState, useEffect } from "react";
import { ApiHandler } from "../utils/apis/api.handler";
import Cookies from "js-cookie";

export function useSession() {
  const [user, setUser] = useState<any>();
  const session = Cookies.get("session");
  let status: "pending" | "authorized" | "unauthorized" = "pending";

  useEffect(() => {
    (async () => {
      if (session) {
        setUser(await ApiHandler.getUser(session));
      }
    })();
  }, [session]);

  if (user?.status === 200) {
    status = "authorized";
    return { user, status };
  }

  if (user?.statusCode === 401 || !session) {
    status = "unauthorized";
    return { user, status };
  }

  return { user, status };
}
