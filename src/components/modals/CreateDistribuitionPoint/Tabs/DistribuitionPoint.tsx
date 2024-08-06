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
      <Input label="Nome: " {...register("name")} errors={errors} />
      <Input label="Telefone: " {...register("phone")} errors={errors} />
      <Textarea label="Descrição: " {...register("description")} errors={errors} />
    </div>
  );
}
