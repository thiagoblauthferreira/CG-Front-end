import { ITable } from "../../interfaces/default";
import { IProduct } from "../../interfaces/products";
import { IColumn, Table } from "../common";
import { FiEdit, FiTrash2 } from "react-icons/fi";

export interface ITableProductsProps extends ITable {
  handleDeleteProduct: (productId: string) => void;
  handleUpdateProduct: (productId: string) => void;
}

const btnStyleDefault =
  "p-2 rounded-md border border-solid text-base cursor-pointer transition-all";

export function TableProducts({
  handleDeleteProduct,
  handleUpdateProduct,
  dataSource,
  ...props
}: ITableProductsProps) {
  const columns: IColumn[] = [
    {
      title: "Nome",
      dataIndex: "name",
      render: (name: string) => {
        return <p>{name}</p>;
      },
    },
    {
      title: "Tipo",
      dataIndex: "type",
      render: (type: string) => {
        return <p>{type}</p>;
      },
    },
    {
      title: "Quantidade",
      dataIndex: "quantity",
      render: (quantity: number) => {
        return <p>{quantity}</p>;
      },
    },
    {
      title: "Peso",
      dataIndex: "weight",
      render: (weight: string) => {
        return <p>{weight}</p>;
      },
    },
    {
      title: "Ação",
      dataIndex: "",
      render: (product: IProduct) => {
        return (
          <div className="flex gap-2">
            <div
              className={`border-blue-600 ${btnStyleDefault} ${
                props.requesting ? "border-gray-400 bg-gray-400" : "hover:opacity-80"
              }`}
              onClick={() => !props.requesting && handleUpdateProduct(product.id)}
            >
              <FiEdit
                className={`text-blue-600 ${props.requesting ? "text-gray-100" : ""}`}
              />
            </div>
            <div
              className={`border-red-600 ${btnStyleDefault} ${
                props.requesting ? "border-gray-400 bg-gray-400" : "hover:opacity-80"
              }`}
              onClick={() => !props.requesting && handleDeleteProduct(product.id)}
            >
              <FiTrash2
                className={`text-red-600 ${props.requesting ? "text-gray-100" : ""}`}
              />
            </div>
          </div>
        );
      },
    },
  ];
  return <Table {...props} columns={columns} dataSource={dataSource} />;
}
