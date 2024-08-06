import { get, post } from "./cg-api.service";
import { IDistribuitionPointCreate } from "../interfaces/distriuition-points";

export function createDistribuitionPoints(data: IDistribuitionPointCreate) {
  return post(`/distribuitionPoint`, { data });
}

export function listDistribuitionPoints(params: any) {
  return get(`/distribuitionPoint`, { params });
}

export function listProductsByDistribuitionPoint(distribuitionPointId: string) {
  return get(`/distribuitionPoint/${distribuitionPointId}/products`);
}
