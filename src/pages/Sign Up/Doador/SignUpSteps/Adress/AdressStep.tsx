import { FieldError, useForm } from "react-hook-form";
import { Dispatch, SetStateAction, useEffect } from "react";
import { SelectInput } from "../../../../../components/SelectInput";
import { Estados } from "./utils/Estados";
import { FormFieldConstructor } from "../../../../../components/FormField";
import { AdressInterface, AdressSchema } from "./utils/adress.zod.interface";
import { zodResolver } from "@hookform/resolvers/zod";
import { zipCodeMask } from "./utils/validations";

interface AdressProps {
  steps: {
    setCurrent: Dispatch<SetStateAction<number>>;
    current: number;
  };

  form: {
    setValues: Dispatch<SetStateAction<any>>;
    values: any;
  };
  submitForm: false | Function;
}

function AdressStep({ steps, form, submitForm }: AdressProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
    watch,
  } = useForm<AdressInterface>({
    resolver: zodResolver(AdressSchema),
    mode: "onTouched",
  });

  async function onSubmit(data: AdressInterface) {
    form.setValues({ ...form.values, endereco: data });
    if (submitForm) submitForm(form.values);
  }

  const cepMask: string = watch("CEP")

  useEffect(() => {
    setValue("CEP", zipCodeMask(cepMask))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cepMask])

  const FormField = FormFieldConstructor<AdressInterface>();
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center"
    >
      <h1 className="text-3xl uppercase pb-5 text-center bold">Endereço</h1>
      <FormField
        error={errors?.CEP}
        register={register}
        setError={setError}
        name="CEP"
        type="text"
        placeholder="CEP"
        maxlength={9}
      />
      <div className="grid grid-cols-4 gap-1">
        <FormField
          name="cidade"
          type="text"
          placeholder="Cidade"
          error={errors?.cidade}
          register={register}
          setError={setError}
          containerClassName="col-span-3"
        />
        <SelectInput
          error={errors?.estado as FieldError | undefined}
          register={register}
          setError={setError}
          name="estado"
          items={Estados}
          className="col-span-1"
        />
      </div>
      <FormField
        name="bairro"
        type="text"
        placeholder="Bairro"
        error={errors?.bairro}
        register={register}
        setError={setError}
      />
      <div className="grid grid-cols-4 gap-1">
        <FormField
          error={errors?.logradouro}
          register={register}
          setError={setError}
          name="logradouro"
          type="text"
          placeholder="logradouro"
          containerClassName="col-span-3"
        />
        <FormField
          name="numero"
          type="number"
          placeholder="Nº"
          error={errors?.numero}
          register={register}
          setError={setError}
          inputClassName="col-span-1"
        />
      </div>
      <div className="w-full">
        <label className="label w-full">
          <span className="label-text uppercase">Complemento</span>
        </label>
        <textarea
          placeholder="Complemento..."
          {...register("complemento")}
          className="w-full textarea textarea-bordered"
        />
      </div>
      <button className="mx-auto mt-5 btn btn-primary w-2/3">
        Cadastrar-se
      </button>
    </form>
  );
}

export default AdressStep;
