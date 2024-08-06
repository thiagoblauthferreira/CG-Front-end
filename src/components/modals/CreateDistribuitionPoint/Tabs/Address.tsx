import { FieldErrors, UseFormRegister } from "react-hook-form";
import { Input } from "../../../common";
import { IDistribuitionPointCreate } from "../../../../interfaces/distriuition-points";

interface ITabAddress {
  register: UseFormRegister<IDistribuitionPointCreate>;
  errors: FieldErrors<IDistribuitionPointCreate>;
}

export function TabAddress({ register, errors }: ITabAddress) {
  return (
    <div
      className={`
        grid grid-flow-row auto-rows-max
        gap-2
      `}
    >
      <Input label="CEP: " {...register("address.cep")} errors={errors} />
      <Input label="Estado: " {...register("address.estado")} errors={errors} />
      <Input label="Pais: " {...register("address.pais")} errors={errors} />
      <Input label="Municipio: " {...register("address.municipio")} errors={errors} />
      <Input label="Bairro: " {...register("address.bairro")} errors={errors} />
      <Input label="Logradouro: " {...register("address.logradouro")} errors={errors} />
      <Input label="Número: " {...register("address.numero")} errors={errors} />
      <Input label="Complemento: " {...register("address.complemento")} errors={errors} />
    </div>
  );
}
