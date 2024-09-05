import { IShelter, IShelterCreate } from "../../../../interfaces/shelter";
import { IUser } from "../../../../interfaces/user";
import { IPaginate } from "../../../common/Table/interface";

export interface ICoordinatorsInitialData {
  data: IUser[];
  total: number;
}

export interface IShelterProvider {
  handleUpdateShelter: (data: IShelterCreate) => void;
  handleFilter: (data: any) => void;
  handleCoordinators: (data: IPaginate) => void;
  setOpenModalConfirmActionS: (event: boolean) => void;
  handleDeleteShelter: (shelterId: string) => void;
  shelter?: IShelter;
  coordinators: ICoordinatorsInitialData;
  openModalConfirmActionS: boolean;
  requesting: boolean;
}

export interface IContextProvider {
  children: React.ReactNode;
  shelter?: IShelter;
  initialCoordinators: ICoordinatorsInitialData;
}
