import { UrlObject } from "url";

export interface ISidebar {
  id: string;
  text: string;
  icon?: React.ReactNode;
  route?: string | UrlObject;
}
