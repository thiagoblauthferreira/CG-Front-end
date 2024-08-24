import React from "react";
import { Button } from "../../../common";
import { ModalConfirmAction, ModalProduct } from "../../../modals";
import { Search } from "../../../search";
import { TableProducts } from "../../../tables/table-products";
import { useDistribuitionPointProvider } from "../context";
import { IProduct } from "../../../../interfaces/products";

export function TabProducts() {
  const {
    handleFilter,
    handleProducts,
    handleCreateProduct,
    handleDeleteProduct,
    handleUpdateProduct,
    setOpenModalProduct,
    handleProduct,
    setOpenModalUpdateProduct,
    setOpenModalConfirmActionProduct,
    products,
    openModalProduct,
    openModalUpdateProduct,
    openModalConfirmActionProduct,
    requesting,
  } = useDistribuitionPointProvider();

  const [product, setProduct] = React.useState<IProduct>();

  const onProduct = async (productId: string, action: "delete" | "update") => {
    const product = await handleProduct(productId);
    setProduct(product);

    if (action === "update") {
      setOpenModalUpdateProduct(true);
    } else {
      setOpenModalConfirmActionProduct(true);
    }
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
          handleDeleteProduct={(productId) => onProduct(productId, "delete")}
          handleUpdateProduct={(productId) => onProduct(productId, "update")}
          onPaginate={handleProducts}
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
        onSubmit={(data) => handleUpdateProduct(product?.id || "", data)}
        modalType="update"
        product={product}
      />

      <ModalConfirmAction
        title="Tem certeza que deseja remover esse produto?"
        open={openModalConfirmActionProduct}
        close={() => setOpenModalConfirmActionProduct(false)}
        onSubmit={() => handleDeleteProduct(product?.id || "")}
      />
    </div>
  );
}
