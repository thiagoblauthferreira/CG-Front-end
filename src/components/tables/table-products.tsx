import { IColumn, ITableProps, Table } from "../common";

export interface ITableProductsProps extends Omit<ITableProps, "columns"> {}

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
            <p>asd</p>
            <p>asd</p>
          </div>
        );
      },
    },
  ];
  return <Table {...props} columns={columns} dataSource={dataSource} />;
}
