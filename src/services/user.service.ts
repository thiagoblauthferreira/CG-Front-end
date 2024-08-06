import { post } from "./cg-api.service";

export function getUser({ data, headers }: any = {}) {
  return post(`/auth/me`, { data, headers });
}
