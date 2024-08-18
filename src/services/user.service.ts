import { get, post } from "./cg-api.service";

export function getUser({ params, data, headers }: any = {}) {
  return post(`/auth/me`, { params, data, headers });
}

export function getUserProfile({ params, data, headers }: any = {}) {
  return get(`/auth/me`, { params, headers });
}
