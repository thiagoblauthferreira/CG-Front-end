import { ITableProps } from "../components/common";

export interface ITable extends Omit<ITableProps, "columns"> {}

export interface IParamsDefault {
  limit?: number | string;
  offset?: number | string;
  sortBy?: string;
  sort?: string;
}
