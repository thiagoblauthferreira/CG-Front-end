import { useForm } from "react-hook-form";
import { Button, Input, Modal, Select, Textarea } from "../common";
import { IProductCreate } from "../../interfaces/products";
import { createProductSchema } from "../../validators/product.validator";
import { zodResolver } from "@hookform/resolvers/zod";

interface IModalProduct {
  close: () => void;
  open: boolean;
  onSubmit: (data: IProductCreate) => void;
}

export function ModalProduct({ close, open, onSubmit }: IModalProduct) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IProductCreate>({ resolver: zodResolver(createProductSchema) });

  return (
    <Modal
      open={open}
      close={close}
      header={
        <div className="p-4">
          <p className="font-semibold text-lg">Criar produto</p>
        </div>
      }
    >
      <div className="p-4 pt-10">
        <form
          className={`
            grid grid-flow-row auto-rows-max
            gap-2
          `}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Input
            label="Nome: "
            placeholder="Digite o nome"
            {...register("name")}
            errors={errors}
          />

          <Select
            label="Tipo: "
            {...register("type")}
            options={[
              { label: "Perecivel", value: "perishable" },
              { label: "Não perecivel", value: "not_perishable" },
            ]}
            errors={errors}
          />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Input
              label="Quantidade: "
              placeholder="Digite a quantidade"
              type="number"
              {...register("quantity")}
              errors={errors}
            />

            <Input
              label="Peso: "
              placeholder="Digite o peso"
              {...register("weight")}
              errors={errors}
            />
          </div>

          <Textarea
            label="Descrição: "
            placeholder="Digite uma descrição"
            {...register("description")}
            errors={errors}
          />

          <Button text="Cadastrar produto" className="w-full mt-4 bg-black text-white" />
        </form>
      </div>
    </Modal>
  );
}
