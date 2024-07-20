import { del, get, patch, post } from "./cg-api.service";
import { IShelterCreate, IShelterUpdate } from "../interfaces/shelter";

export function listShelters() {
  return get(`/shelter`);
}

export function listOneShelter(shelterId: string) {
  return get(`/shelter/${shelterId}`);
}

export function createShelter(payload: IShelterCreate) {
  return post("/shelter", payload);
}

export function deleteShelter(shelterId: string) {
  return del(`/shelter/${shelterId}`);
}

export function updateShelter(shelterId: string, payload: IShelterUpdate) {
  return patch(`/shelter/${shelterId}`, payload);
}

export function addCoordinator(shelterId: string, payload: any) {
  return patch(`/shelter/${shelterId}/coordinator`, { action: "add", ...payload });
}

export function removeCoordinator(shelterId: string, payload: any) {
  return patch(`/shelter/${shelterId}/coordinator`, { action: "remove", ...payload });
}
