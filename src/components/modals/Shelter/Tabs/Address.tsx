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
      <Input
        label="CEP: "
        placeholder="Digite o CEP"
        {...register("address.cep")}
        errors={errors}
      />
      <Input
        label="Estado: "
        placeholder="Digite o estado"
        {...register("address.estado")}
        errors={errors}
      />
      <Input
        label="País: "
        placeholder="Digite o país"
        {...register("address.pais")}
        errors={errors}
      />
      <Input
        label="Município: "
        placeholder="Digite o município"
        {...register("address.municipio")}
        errors={errors}
      />
      <Input
        label="Bairro: "
        placeholder="Digite o bairro"
        {...register("address.bairro")}
        errors={errors}
      />
      <Input
        label="Logradouro: "
        placeholder="Digite o logradouro"
        {...register("address.logradouro")}
        errors={errors}
      />
      <Input
        label="Número: "
        placeholder="Digite o número"
        {...register("address.numero")}
        errors={errors}
      />
      <Input
        label="Complemento: "
        placeholder="Digite o complemento"
        {...register("address.complemento")}
        errors={errors}
      />
    </div>
  );
}
