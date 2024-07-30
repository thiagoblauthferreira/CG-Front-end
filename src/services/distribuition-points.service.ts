import { get } from "./cg-api.service";

export function listDistribuitionPoints() {
  return get(`/distribuitionPoint`);
}

export function listProductsByDistribuitionPoint(distribuitionPointId: string) {
  return get(`/distribuitionPoint/${distribuitionPointId}/products`);
}
