import { get } from "./cg-api.service";

export function listDistribuitionPoints() {
  return get(`/distribuitionPoint`);
}
