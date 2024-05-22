import {
  FieldValues,
  Path,
  FieldError,
  UseFormRegister,
  UseFormSetError,
} from "react-hook-form";
import { Estados } from "../pages/Sign Up/Doador/SignUpSteps/Adress/Estados";
import { Veiculos } from "../pages/Sign Up/Doador/SignUpSteps/Adress/Veiculos";

interface SelectInputProps<T extends FieldValues> {
  label?: boolean;
  items: readonly string[];
  error: FieldError | undefined;
  register: UseFormRegister<T>;
  setError: UseFormSetError<T>;
  name: Path<T>;
}

export function SelectInput<T extends FieldValues>(props: SelectInputProps<T>) {
  return (
    <div className="form-control">
      <label className={`label ${props.label === false && "hidden"}`}>
        <span className="label-text uppercase">{props.name}</span>
      </label>
      <select
        {...props.register(props.name)}
        className={`select select-bordered"> ${props.error && "input-error"}`}
      >
        <option className="text-slate-500">Escolha</option>
        {props.items.map((estado, i) => {
          return <option key={i}>{estado}</option>;
        })}
      </select>
      <span className="text-error h-5 w-full text-xs pt-2">
        {props.error?.message}
      </span>
    </div>
  );
}
