import React from "react";

export interface IPaginate {
  offset: number;
  currentPage: number;
  limit: number;
}

export interface IColumn {
  title: string;
  dataIndex: string;
  render: (event: any) => React.ReactNode;
}

export interface ITableProps {
  columns: IColumn[];
  dataSource: { [key: string]: any }[];
  rowKey?: string;
  requesting?: boolean;
  limit?: number;
  total?: number;
  onPaginate?: (pagination: IPaginate) => void;
  textNotFound?: string;
}

const styleBtnPaginate = "join-item btn min-h-max h-full bg-black text-white";

export function Table({
  columns,
  dataSource,
  rowKey = "id",
  requesting = false,
  limit = 10,
  total = 0,
  textNotFound,
  onPaginate,
}: ITableProps) {
  const defaultPage = {
    currentPage: 0,
    offset: 0,
    limit: limit,
  };

  const [pagination, setPagination] = React.useState<IPaginate>(defaultPage);

  const handlePages = () => {
    const pageCount = Math.ceil(total / limit);
    const pageNumbers = Array.from({ length: pageCount }, (_, index) => index + 1);
    return pageNumbers;
  };

  const totalPages = handlePages();
  const totalPagesCount = totalPages.length;

  const paginationPrev = () => {
    if (!requesting) {
      const currentPage = pagination.currentPage - 1;

      const currentPagination = {
        currentPage: currentPage,
        offset: currentPage * limit,
        limit: limit,
      };

      if (currentPage >= 0) {
        setPagination(currentPagination);
        onPaginate && onPaginate(currentPagination);
      }
    }
  };

  const paginationNext = () => {
    if (!requesting) {
      const currentPage = pagination.currentPage + 1;

      const currentPagination = {
        currentPage: currentPage,
        offset: currentPage * limit,
        limit: limit,
      };

      if (currentPage < totalPagesCount) {
        setPagination(currentPagination);
        onPaginate && onPaginate(currentPagination);
      }
    }
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra text-center">
          <thead>
            <tr>
              {columns.map((column, index) => {
                return (
                  <th key={`table-thead-${column.dataIndex}-${index}`}>{column.title}</th>
                );
              })}
            </tr>
          </thead>

          {dataSource.length > 0 && (
            <tbody>
              {dataSource.map((row) => {
                return (
                  <tr key={`table-tbody-${row[rowKey]}`} className="odd:bg-gray-300">
                    {columns.map((column, index) => {
                      return (
                        <td
                          key={`table-tbody-td-${column.dataIndex || index}-${index}`}
                          className={`
                            align-middle
                          `}
                        >
                          <div className="flex justify-center">
                            {column.render(
                              column.dataIndex ? row[column.dataIndex] : row
                            )}
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
            </tbody>
          )}
        </table>

        {dataSource.length <= 0 && (
          <div className="text-nowrap p-2 py-3 text-center">
            <p className="font-semibold text-gray-400">
              {textNotFound ? textNotFound : "Nenhum valor encontrado"}
            </p>
          </div>
        )}
      </div>

      <div className="flex justify-end mt-2">
        <div className="join rounded-lg h-[40px]">
          <button className={`${styleBtnPaginate}`} onClick={paginationPrev}>
            «
          </button>
          <button className={`${styleBtnPaginate}`}>Page 22</button>
          <button className={`${styleBtnPaginate}`} onClick={paginationNext}>
            »
          </button>
        </div>
      </div>
    </div>
  );
}
