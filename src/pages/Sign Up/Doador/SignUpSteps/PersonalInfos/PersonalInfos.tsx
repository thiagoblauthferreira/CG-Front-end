import { useForm } from "react-hook-form";
import { FormFieldConstructor } from "../../../../../components/FormField";
import { Dispatch, SetStateAction, useEffect } from "react";
import {
  PersonalInfosInterface,
  PersonalInfosSchema,
} from "./utils/personalInfos.zod.interface";
import { zodResolver } from "@hookform/resolvers/zod";
import { phoneMask } from "../Adress/utils/validations";

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
    setValue,
    watch
  } = useForm<PersonalInfosInterface>({
    resolver: zodResolver(PersonalInfosSchema),
    mode: "onTouched",
  });

  async function onSubmit(data: PersonalInfosInterface) {
    form.setValues(data);
    console.log(form.values);
    steps.setCurrent(steps.current + 1);
  }

  const FormField = FormFieldConstructor<PersonalInfosInterface>();

  const phone: string = watch("telefone")

  useEffect(() => {
    setValue("telefone", phoneMask(phone))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [phone])

  return (
    <form
      className="flex flex-col justify-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h1 className="text-3xl uppercase pb-5 text-center bold">Informações</h1>
      <FormField
        name="nome"
        register={register}
        setError={setError}
        placeholder="Seu nome"
        error={errors?.nome}
      />
      <FormField
        name="email"
        type="email"
        register={register}
        placeholder="Seu Email"
        setError={setError}
        error={errors?.email}
      />
      <FormField
        name="senha"
        type="password"
        register={register}
        placeholder="Sua senha"
        setError={setError}
        error={errors?.senha}
      />
      <FormField
        name="confirma"
        type="password"
        register={register}
        placeholder="Confirme sua senha"
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
      <FormField
        name="telefone"
        type="text"
        placeholder="xxxxxxxxxxx"
        minLength={14}
        maxlength={15}
        register={register}
        setError={setError}
        error={errors?.telefone}
      />
      <label className="cursor-pointer label">
        <span className="label-text text-lg">Sou doador</span>
        <input
          {...register("isDonor")}
          type="checkbox"
          defaultChecked
          className="checkbox checkbox-accent"
        />
      </label>
      <label className="cursor-pointer label">
        <span className="label-text text-lg">Sou coordenador de abrigo</span>
        <input
          {...register("isCoordinator")}
          type="checkbox"
          className="checkbox checkbox-accent"
        />
      </label>
      <button className="mx-auto mt-5 btn btn-primary w-2/3">Próximo</button>
    </form>
  );
}
