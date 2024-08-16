import { Button } from "../../common";
import { ModalProduct } from "../../modals/Product";
import { Search } from "../../search";
import { TableProducts } from "../../tables/table-products";
import { useDistribuitionPointProvider } from "./context";

export function TabProducts() {
  const {
    handleFilter,
    handleCreateProduct,
    setOpenModalProduct,
    products,
    openModalProduct,
  } = useDistribuitionPointProvider();

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
            className="grid gap-4 grid-cols-1 md:grid-cols-3 w-full"
            onFilter={handleFilter}
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
            onClick={() => setOpenModalProduct(true)}
          />
        </div>
      </div>

      <div>
        <TableProducts
          total={products.total}
          dataSource={products.data}
          textNotFound="Nenhum produto encontrado"
        />
      </div>

      <ModalProduct
        open={openModalProduct}
        close={() => setOpenModalProduct(false)}
        onSubmit={handleCreateProduct}
      />
    </div>
  );
}
