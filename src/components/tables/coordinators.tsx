import { useAuthProvider } from "../../context/Auth";
import { ITable } from "../../interfaces/default";
import { IProduct } from "../../interfaces/products";
import { Table } from "../common";
import { IColumn } from "../common/Table/interface";
import { FiTrash2 } from "react-icons/fi";

export interface ITableCoordinatorsProps extends ITable {}

const btnStyleDefault =
  "p-2 rounded-md border border-solid text-base cursor-pointer transition-all hover:opacity-80";

export function TableCoordinators({ dataSource, ...props }: ITableCoordinatorsProps) {
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
      title: "Email",
      dataIndex: "email",
      render: (email: string) => {
        return <p>{email}</p>;
      },
    },
    {
      title: "Telefone",
      dataIndex: "phone",
      render: (phone: number) => {
        return <p>{phone}</p>;
      },
    },
    {
      title: "Possui veiculo?",
      dataIndex: "hasVehicle",
      render: (hasVehicle: boolean) => {
        return <p>{hasVehicle ? "Sim" : "Não"}</p>;
      },
    },
    {
      title: "Tipo do veiculo",
      dataIndex: "vehicleType",
      render: (vehicleType: string) => {
        return <p>{vehicleType}</p>;
      },
    },
    {
      title: "Ação",
      dataIndex: "",
      render: (product: IProduct) => {
        return (
          <button
            className={`
              border-red-600 
              ${btnStyleDefault} 
              disabled:border-gray-400 disabled:bg-gray-400 
              disabled:opacity-100 disabled:cursor-auto
            `}
            onClick={() =>
              !props.requesting && product.creator?.id === currentUser?.id && false
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
        );
      },
    },
  ];
  return <Table {...props} columns={columns} dataSource={dataSource} />;
}
