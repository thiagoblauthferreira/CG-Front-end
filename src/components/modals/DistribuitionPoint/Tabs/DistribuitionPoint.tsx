import { FieldErrors, UseFormRegister } from "react-hook-form";
import { Input, Textarea } from "../../../common";
import { IDistribuitionPointCreate } from "../../../../interfaces/distriuition-points";

interface ITabDistribuitionPoint {
  register: UseFormRegister<IDistribuitionPointCreate>;
  errors: FieldErrors<IDistribuitionPointCreate>;
}

export function TabDistribuitionPoint({ register, errors }: ITabDistribuitionPoint) {
  return (
    <div
      className={`
        grid grid-flow-row auto-rows-max
        gap-2
      `}
    >
      <Input
        label="Nome: "
        placeholder="Digite o nome"
        {...register("name")}
        errors={errors}
      />
      <Input
        label="Telefone: "
        placeholder="(xx) x-xxxx-xxx"
        {...register("phone")}
        errors={errors}
      />
      <Textarea
        label="Descrição: "
        placeholder="Digite uma descrição"
        {...register("description")}
        errors={errors}
      />
    </div>
  );
}
