import React from "react";
import { Button, Select, Modal, Input, Textarea } from "../../../components/common";
import { TableProducts } from "../../../components/tables/table-products";
import { useParams } from "react-router-dom";

function ProductsScreen() {
  const { id } = useParams();

  const [openModal, setOpenModal] = React.useState<boolean>(false);

  return (
    <div className="py-8">
      <div className="my-5">
        <p className="font-semibold">Filtrar por</p>
        <div
          className={`
            grid grid-cols-4 gap-3 py-2
          `}
        >
          <Select
            options={[
              { label: "teste", value: "teste" },
              { label: "teste", value: "teste" },
            ]}
          />
          <Select
            options={[
              { label: "teste", value: "teste" },
              { label: "teste", value: "teste" },
            ]}
          />

          <div
            className={`
              flex justify-end col-end-5
            `}
          >
            <Button
              text="Nova necessidade"
              className="bg-black text-white"
              onClick={() => setOpenModal(true)}
            />
          </div>
        </div>
      </div>

      <div>
        <TableProducts
          dataSource={[
            {
              title: "teste",
              dataIndex: "",
            },
          ]}
        />
      </div>

      <Modal open={openModal} close={() => setOpenModal(false)}>
        <div className="p-4 pt-10">
          <form
            className={`
            grid grid-flow-row auto-rows-max
            gap-2
          `}
          >
            <Select
              label="Teste"
              options={[
                { label: "teste", value: "teste" },
                { label: "teste", value: "teste" },
              ]}
            />
            <Input label="Teste" />

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Input label="Teste" />

              <Input label="Teste" />
            </div>

            <Input label="Teste" />

            <Textarea label="Teste" />

            <Button text="Cadastrar" className="w-full mt-4 bg-black text-white" />
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default ProductsScreen;
