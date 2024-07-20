import { post } from "./cg-api.service";

export function me() {
  return post(`/auth/me`);
}
