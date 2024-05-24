import { FieldError, useForm } from "react-hook-form";
import { Dispatch, SetStateAction } from "react";
import { SelectInput } from "../../../../../components/SelectInput";
import { Estados } from "./utils/Estados";
import { FormFieldConstructor } from "../../../../../components/FormField";
import { AdressInterface, AdressSchema } from "./utils/adress.zod.interface";
import { zodResolver } from "@hookform/resolvers/zod";

interface AdressProps {
  steps: {
    setCurrent: Dispatch<SetStateAction<number>>;
    current: number;
  };

  form: {
    setValues: Dispatch<SetStateAction<any>>;
    values: any;
  };
}

function AdressStep({ steps, form }: AdressProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<AdressInterface>({
    resolver: zodResolver(AdressSchema),
    mode: "onTouched",
  });

  async function onSubmit(data: AdressInterface) {
    steps.setCurrent(steps.current + 1);
    form.setValues({ ...data, ...form.values });
    console.log(form.values);
  }

  const FormField = FormFieldConstructor<AdressInterface>();
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center">
      <h1 className="text-3xl uppercase pb-5 text-center bold">Endereço</h1>
      <FormField
        error={errors?.CEP}
        register={register}
        setError={setError}
        name="CEP"
        type="text"
        placeHolder="CEP"
      />
      <div className="flex w-full fex-row items-center">
        <FormField
          name="cidade"
          type="text"
          placeHolder="Cidade"
          error={errors?.cidade}
          register={register}
          setError={setError}
          containerClassName="w-full"
        />
        <SelectInput
          error={errors?.estado as FieldError | undefined}
          register={register}
          setError={setError}
          name="estado"
          items={Estados}
          className="ml-1"
        />
      </div>
      <FormField
        name="bairro"
        type="text"
        placeHolder="Bairro"
        error={errors?.bairro}
        register={register}
        setError={setError}
      />
      <div className="flex fex-row items-center">
        <FormField
          error={errors?.rua}
          register={register}
          setError={setError}
          name="rua"
          type="text"
          placeHolder="Rua"
          containerClassName="w-full"
        />
        <FormField
          name="numero"
          type="number"
          placeHolder="Nº"
          error={errors?.numero}
          register={register}
          setError={setError}
          inputClassName="w-24 ml-1"
        />
      </div>
      <button className="mx-auto mt-5 btn btn-primary w-2/3">Próximo</button>
    </form>
  );
}

export default AdressStep;
