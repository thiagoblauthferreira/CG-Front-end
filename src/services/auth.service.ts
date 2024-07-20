import { post } from "./cg-api.service";
import { IUserCreate } from "../interfaces/user";
import { ILogin } from "../interfaces/auth";

export function login(payload: ILogin) {
  return post(`/auth/login`, payload);
}

export function register(payload: IUserCreate) {
  return post(`/auth/register`, payload);
}
