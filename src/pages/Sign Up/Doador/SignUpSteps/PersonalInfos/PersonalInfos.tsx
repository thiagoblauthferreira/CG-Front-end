import {
  FieldErrors,
  UseFormRegister,
  UseFormSetError,
} from "react-hook-form";
import { FormField } from "../../../../../components/FormField";
import { DoadorFormData } from "../../doador.signup";
import {
  Dispatch,
  SetStateAction,
} from "react";

interface PersonalInfosProps {
  setCurrentStep: Dispatch<SetStateAction<number>>;
  currentStep: number;
  errors: FieldErrors<DoadorFormData> | undefined;
  register: UseFormRegister<DoadorFormData>;
  setError: UseFormSetError<DoadorFormData>;
}

function PersonalInfosStep(props: PersonalInfosProps) {
  /**
   * Checa se a sessão está ativa,
   * se estiver redirecione o usuário
   * para a tela de usuário
   */
  return (
    <>
      <h1 className="text-3xl uppercase pb-5 text-center bold">Informações</h1>
      <FormField
        name="nome"
        type="text"
        focus={true}
        register={props.register}
        placeHolder="Seu Nome"
        setError={props.setError}
        error={props.errors?.nome}
      />
      <FormField
        name="email"
        type="email"
        register={props.register}
        placeHolder="Seu Email"
        setError={props.setError}
        error={props.errors?.email}
      />
      <FormField
        name="senha"
        type="password"
        register={props.register}
        placeHolder="Sua senha"
        setError={props.setError}
        error={props.errors?.senha}
      />
      <FormField
        name="confirma"
        type="password"
        register={props.register}
        placeHolder="Confirme sua senha"
        setError={props.setError}
        error={props.errors?.confirma}
      />
      <FormField
        name="nascimento"
        type="date"
        register={props.register}
        placeHolder="dd/mm/yyyy"
        setError={props.setError}
        error={props.errors?.nascimento}
      />
      <div
        onClick={() => {
          props.setCurrentStep(props.currentStep + 1);
        }}
        className="mx-auto mt-5 btn btn-primary w-2/3"
      >
        Próximo
      </div>
    </>
  );
}

export default PersonalInfosStep;
