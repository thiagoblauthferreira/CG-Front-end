import { FieldErrors, useForm } from "react-hook-form";
import { FormFieldConstructor } from "../../../../../components/FormField";
import { Dispatch, FormEvent, SetStateAction } from "react";
import {
  PersonalInfosInterface,
  PersonalInfosSchema,
} from "./utils/personalInfos.zod.interface";
import { zodResolver } from "@hookform/resolvers/zod";

interface PersonalInfosProps {
  steps: {
    setCurrent: Dispatch<SetStateAction<number>>;
    current: number;
  };

  form: {
    setValues: Dispatch<SetStateAction<any>>;
    values: any;
  };
}

export function PersonalInfosStep({ steps, form }: PersonalInfosProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<PersonalInfosInterface>({
    resolver: zodResolver(PersonalInfosSchema),
    mode: "onTouched",
  });

  async function onSubmit(data: PersonalInfosInterface) {
    steps.setCurrent(steps.current + 1);
    form.setValues({ ...form.values, ...data });
    console.log(form.values);
  }

  const FormField = FormFieldConstructor<PersonalInfosInterface>();

  return (
    <form
      className="flex flex-col justify-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-3xl uppercase pb-5 text-center bold">Informações</h1>
      <FormField
        name="nome"
        type="text"
        focus={true}
        register={register}
        placeHolder="Seu Nome"
        setError={setError}
        error={errors?.nome}
      />
      <FormField
        name="email"
        type="email"
        register={register}
        placeHolder="Seu Email"
        setError={setError}
        error={errors?.email}
      />
      <FormField
        name="senha"
        type="password"
        register={register}
        placeHolder="Sua senha"
        setError={setError}
        error={errors?.senha}
      />
      <FormField
        name="confirma"
        type="password"
        register={register}
        placeHolder="Confirme sua senha"
        setError={setError}
        error={errors?.confirma}
      />
      <FormField
        name="nascimento"
        type="date"
        register={register}
        setError={setError}
        error={errors?.nascimento}
      />
      <button className="mx-auto mt-5 btn btn-primary w-2/3">Próximo</button>
    </form>
  );
}
