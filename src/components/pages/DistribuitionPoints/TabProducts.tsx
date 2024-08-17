import React from "react";
import { Button } from "../../common";
import { ModalProduct } from "../../modals";
import { Search } from "../../search";
import { TableProducts } from "../../tables/table-products";
import { useDistribuitionPointProvider } from "./context";
import { IProduct } from "../../../interfaces/products";

export function TabProducts() {
  const {
    handleFilter,
    handleCreateProduct,
    handleDeleteProduct,
    handleUpdateProduct,
    setOpenModalProduct,
    handleProduct,
    setOpenModalUpdateProduct,
    products,
    openModalProduct,
    openModalUpdateProduct,
    requesting,
  } = useDistribuitionPointProvider();

  const [product, setProduct] = React.useState<IProduct>();

  const onUpdateProduct = async (productId: string) => {
    const product = await handleProduct(productId);

    setProduct(product);
    setOpenModalUpdateProduct(true);
  };

  return (
    <div>
      <div className="my-5">
        <p className="font-semibold mb-2">Filtrar por</p>
        <div
          className={`
            flex flex-col gap-4 md:flex-row
          `}
        >
          <Search
            className="gap-4 w-full"
            onFilter={handleFilter}
            disabled={requesting}
            options={[
              {
                optionKey: "teste1",
                type: "select",
                options: [
                  { label: "teste1", value: "teste1" },
                  { label: "teste2", value: "teste2" },
                  { label: "teste3", value: "teste3" },
                ],
              },
              {
                optionKey: "teste2",
                type: "select",
                options: [
                  { label: "teste1", value: "teste1" },
                  { label: "teste2", value: "teste2" },
                  { label: "teste3", value: "teste3" },
                ],
              },
              {
                optionKey: "teste 3",
                type: "select",
                options: [
                  { label: "teste1", value: "teste1" },
                  { label: "teste2", value: "teste2" },
                  { label: "teste3", value: "teste3" },
                ],
              },
            ]}
          />

          <Button
            text="Nova necessidade"
            className="bg-black text-white"
            disabled={requesting}
            onClick={() => setOpenModalProduct(true)}
          />
        </div>
      </div>

      <div>
        <TableProducts
          total={products.total}
          dataSource={products.data}
          handleDeleteProduct={handleDeleteProduct}
          handleUpdateProduct={onUpdateProduct}
          requesting={requesting}
          textNotFound="Nenhum produto encontrado"
        />
      </div>

      <ModalProduct
        open={openModalProduct}
        close={() => setOpenModalProduct(false)}
        onSubmit={handleCreateProduct}
      />

      <ModalProduct
        open={openModalUpdateProduct}
        close={() => setOpenModalUpdateProduct(false)}
        onSubmit={(data) => handleUpdateProduct("", data)}
        modalType="update"
        product={product}
      />
    </div>
  );
}
