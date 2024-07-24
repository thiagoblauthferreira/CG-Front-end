import { ISidebar } from "../../interfaces/layout";

export const sidebarData = (): ISidebar[] => {
  return [{ id: "profile", text: "Perfil", route: "/profile" }];
};
