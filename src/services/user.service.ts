import { post } from "./cg-api.service";

export function getUser() {
  return post(`/auth/me`);
}
