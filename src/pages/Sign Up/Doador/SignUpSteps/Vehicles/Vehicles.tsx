import {
  FieldError,
  FieldErrors,
  FieldValues,
  UseFormRegister,
  UseFormSetError,
} from "react-hook-form";
import { DoadorFormData } from "../../doador.signup";
import { SelectInput } from "../../../../../components/SelectInput";
import { Veiculos } from "../Adress/Veiculos";
import { Dispatch, SetStateAction } from "react";

interface VehiclesProps extends FieldValues {
  currentStep: number;
  setCurrentStep: Dispatch<SetStateAction<number>>;
  errors: FieldErrors<DoadorFormData> | undefined;
  register: UseFormRegister<DoadorFormData>;
  setError: UseFormSetError<DoadorFormData>;
}

function VehiclesStep(props: VehiclesProps) {
  return (
    <div className="flex flex-col justify-center">
      <h1 className="text-3xl uppercase pb-5 text-center bold">Veículos</h1>
      <span className="text-center py-5">
        Você possui algum veículo que pode ser utilizado para ajudar a
        transportar suprimentos e ferramentas?{" "}
      </span>
      <SelectInput
        name="veiculos"
        error={props.errors?.veiculos as FieldError | undefined}
        register={props.register}
        setError={props.setError}
        label={false}
        items={Veiculos}
      />
      <button className="btn round btn-sm mx-auto btn-square btn-outline flex items-center">
        <span className="bold text-lg">+</span>
      </button>
      <div
        onClick={() => props.setCurrentStep(props.currentStep + 1)}
        className="mx-auto mt-5 btn btn-primary w-2/3"
      >
        Cadastro
      </div>
    </div>
  );
}

export default VehiclesStep;
