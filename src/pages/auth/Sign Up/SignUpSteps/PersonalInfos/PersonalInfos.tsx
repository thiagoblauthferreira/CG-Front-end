import { useForm } from "react-hook-form";
import { Dispatch, SetStateAction, useEffect } from "react";
import {
  PersonalInfosInterface,
  PersonalInfosSchema,
} from "./utils/personalInfos.zod.interface";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormFieldConstructor } from "../../../../../components/FormField";
import { ApiHandler } from "../../../../../utils/apis/api.handler";
import { phoneMask } from "../Adress/utils/validations";

interface PersonalInfosProps {
  steps: {
    setCurrent: Dispatch<SetStateAction<number>>;
    current: number;
  };

  form: {
    setValues: Function;
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
        error={errors?.nome}
        inputProps={{
          placeholder: "Seu nome",
        }}
      />
      <FormField
        name="email"
        register={register}
        setError={setError}
        error={errors?.email}
        inputProps={{
          type: "email",
          placeholder: "Seu Email",
        }}
      />
      <FormField
        name="senha"
        register={register}
        setError={setError}
        error={errors?.senha}
        inputProps={{
          type: "password",
          placeholder: "Sua senha",
        }}
      />
      <FormField
        name="confirma"
        register={register}
        setError={setError}
        error={errors?.confirma}
        inputProps={{
          placeholder: "Confirme sua senha",
          type: "password",
        }}
      />
      <FormField
        name="nascimento"
        register={register}
        setError={setError}
        error={errors?.nascimento}
        inputProps={{
          type: "date",
        }}
      />
      <FormField
        name="telefone"
        register={register}
        setError={setError}
        error={errors?.telefone}
        inputProps={{
          type: "tel",
          placeholder: "(xx) xxxxx-xxxx",
          maxLength: 15
        }}
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
