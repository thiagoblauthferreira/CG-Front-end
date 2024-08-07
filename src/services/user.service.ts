import { post } from "./cg-api.service";

export function getUser({ params, data, headers }: any = {}) {
  return post(`/auth/me`, { params, data, headers });
}
