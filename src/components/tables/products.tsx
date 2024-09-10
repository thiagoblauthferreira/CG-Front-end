import { useAuthProvider } from "../../context/Auth";
import { ITable } from "../../interfaces/default";
import { IProduct } from "../../interfaces/products";
import { Table } from "../common";
import { IColumn } from "../common/Table/interface";
import { FiEdit, FiTrash2 } from "react-icons/fi";

export interface ITableProductsProps extends ITable {
  handleDeleteProduct: (productId: string) => void;
  handleUpdateProduct: (productId: string) => void;
}

const btnStyleDefault =
  "p-2 rounded-md border border-solid text-base cursor-pointer transition-all hover:opacity-80";

export function TableProducts({
  handleDeleteProduct,
  handleUpdateProduct,
  dataSource,
  ...props
}: ITableProductsProps) {
  const { currentUser } = useAuthProvider();

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
            <button
              className={`
                border-blue-600 
                ${btnStyleDefault} 
                disabled:border-gray-400 disabled:bg-gray-400 disabled:opacity-100 disabled:cursor-auto
              `}
              onClick={() =>
                !props.requesting &&
                product.creator?.id === currentUser?.id &&
                handleUpdateProduct(product.id)
              }
              disabled={product.creator?.id !== currentUser?.id || props.requesting}
            >
              <FiEdit
                className={`
                  text-blue-600 
                  ${props.requesting ? "text-gray-100" : ""}
                  ${product.creator?.id !== currentUser?.id ? "!text-gray-100" : ""}
                `}
              />
            </button>
            <button
              className={`
                border-red-600 
                ${btnStyleDefault} 
                disabled:border-gray-400 disabled:bg-gray-400 disabled:opacity-100 disabled:cursor-auto
              `}
              onClick={() =>
                !props.requesting &&
                product.creator?.id === currentUser?.id &&
                handleDeleteProduct(product.id)
              }
              disabled={product.creator?.id !== currentUser?.id || props.requesting}
            >
              <FiTrash2
                className={`
                  text-red-600 
                  ${props.requesting ? "text-gray-100" : ""}
                  ${product.creator?.id !== currentUser?.id ? "!text-gray-100" : ""}
                `}
              />
            </button>
          </div>
        );
      },
    },
  ];
  return <Table {...props} columns={columns} dataSource={dataSource} />;
}
