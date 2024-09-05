import { ISidebar } from "../../interfaces/layout";

export const sidebarData = (): ISidebar[] => {
  return [
    { id: "profile", text: "Perfil", route: "/profile" },
    {
      id: "distribuition-points",
      text: "Ponto de distribuição",
      route: "/",
    },
    { id: "shelters", text: "Abrigos", route: "/shelters" },
    { id: "register-demand-point", text: "Cadastrar Ponto de demanda", route: "#" },
    { id: "register-shelter", text: "Cadastrar abrigo", route: "#" },
    { id: "options", text: "Outras opções", route: "#" },
  ];
};
