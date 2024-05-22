import {
  FieldError,
  FieldErrors,
  FieldValues,
  UseFormRegister,
  UseFormSetError,
} from "react-hook-form";
import { FormField } from "../../../../../components/FormField";
import { DoadorFormData } from "../../doador.signup";
import { Dispatch, SetStateAction } from "react";
import { SelectInput } from "../../../../../components/SelectInput";
import { Estados } from "./Estados";

interface AdressProps extends FieldValues {
  setCurrentStep: Dispatch<SetStateAction<number>>;
  currentStep: number;
  errors: FieldErrors<DoadorFormData> | undefined;
  register: UseFormRegister<DoadorFormData>;
  setError: UseFormSetError<DoadorFormData>;
}

function AdressStep(props: AdressProps) {
  return (
    <>
    <h1 className="text-3xl uppercase pb-5 text-center bold">Endereço</h1>
      <FormField
        error={props.errors?.CEP}
        register={props.register}
        setError={props.setError}
        name="CEP"
        type="text"
        placeHolder="CEP"
      />
      <div className="flex fex-row items-center">
        <FormField
          name="cidade"
          type="text"
          placeHolder="Cidade"
          error={props.errors?.cidade}
          register={props.register}
          setError={props.setError}
        />
        <SelectInput
          error={props.errors?.estado as FieldError | undefined}
          register={props.register}
          setError={props.setError}
          name="estado"
          items={Estados}
        />
      </div>
      <FormField
        name="bairro"
        type="text"
        placeHolder="Bairro"
        error={props.errors?.bairro}
        register={props.register}
        setError={props.setError}
      />
      <div className="flex fex-row items-center">
        <FormField
          error={props.errors?.rua}
          register={props.register}
          setError={props.setError}
          name="rua"
          type="text"
          placeHolder="Rua"
        />
        <FormField
          name="numero"
          type="number"
          placeHolder="Nº"
          error={props.errors?.numero}
          register={props.register}
          setError={props.setError}
          className="w-24 ml-1"
        />
      </div>
      <div
        onClick={() => {
          props.setCurrentStep(props.currentStep + 1)
        }}
        className="mx-auto mt-5 btn btn-primary w-2/3"
      >
        Próximo
      </div>
    </>
  );
}

export default AdressStep;
