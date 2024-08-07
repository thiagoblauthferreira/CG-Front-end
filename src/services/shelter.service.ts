import { del, get, patch, post } from "./cg-api.service";
import { IShelterCreate, IShelterUpdate } from "../interfaces/shelter";

export function listShelters(params: any) {
  return get(`/shelter`, params);
}

export function listOneShelter(shelterId: string) {
  return get(`/shelter/${shelterId}`);
}

export function createShelter(data: IShelterCreate) {
  return post("/shelter", { data });
}

export function deleteShelter(shelterId: string) {
  return del(`/shelter/${shelterId}`);
}

export function updateShelter(shelterId: string, data: IShelterUpdate) {
  return patch(`/shelter/${shelterId}`, { data });
}

export function addCoordinator(shelterId: string, data: any) {
  return patch(`/shelter/${shelterId}/coordinator`, {
    data: { action: "add", ...data },
  });
}

export function removeCoordinator(shelterId: string, data: any) {
  return patch(`/shelter/${shelterId}/coordinator`, {
    data: { action: "remove", ...data },
  });
}
