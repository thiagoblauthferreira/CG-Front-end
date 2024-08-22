import { IShelter, IShelterCreate } from "../../../../interfaces/shelter";
import { IUser } from "../../../../interfaces/user";

export interface ICoordinatorsInitialData {
  data: IUser[];
  total: number;
}

export interface IShelterProvider {
  handleUpdateShelter: (data: IShelterCreate) => void;
  shelter?: IShelter;
  coordinators: ICoordinatorsInitialData;
}

export interface IContextProvider {
  children: React.ReactNode;
  shelter?: IShelter;
  initialCoordinators: ICoordinatorsInitialData;
}
