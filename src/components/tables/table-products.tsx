import { IColumn, ITableProps, Table } from "../common";
import { FiEdit, FiTrash2 } from "react-icons/fi";

export interface ITableProductsProps extends Omit<ITableProps, "columns"> {}

const btnStyleDefault =
  "p-2 rounded-md border border-solid text-base cursor-pointer transition-all hover:opacity-80";

export function TableProducts({ dataSource, ...props }: ITableProductsProps) {
  const columns: IColumn[] = [
    {
      title: "teste",
      dataIndex: "",
      render: () => {
        return <p>teste</p>;
      },
    },
    {
      title: "teste",
      dataIndex: "",
      render: () => {
        return <p>teste</p>;
      },
    },
    {
      title: "teste",
      dataIndex: "",
      render: () => {
        return <p>teste</p>;
      },
    },
    {
      title: "teste",
      dataIndex: "",
      render: () => {
        return <p>teste</p>;
      },
    },
    {
      title: "teste",
      dataIndex: "",
      render: () => {
        return <p>teste</p>;
      },
    },
    {
      title: "Ação",
      dataIndex: "",
      render: () => {
        return (
          <div className="flex gap-2">
            <div className={`border-blue-600 ${btnStyleDefault}`}>
              <FiEdit className={`text-blue-600`} />
            </div>
            <div className={`border-red-600 ${btnStyleDefault}`}>
              <FiTrash2 className={`text-red-600`} />
            </div>
          </div>
        );
      },
    },
  ];
  return <Table {...props} columns={columns} dataSource={dataSource} />;
}
