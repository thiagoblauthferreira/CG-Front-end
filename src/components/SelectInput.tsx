import {
  FieldValues,
  Path,
  FieldError,
  UseFormRegister,
  UseFormSetError,
} from "react-hook-form";

interface SelectInputProps<T extends FieldValues> {
  label?: boolean;
  className?: string;
  items: readonly string[];
  error: FieldError | undefined;
  register: UseFormRegister<T>;
  setError: UseFormSetError<T>;
  name: Path<T>;
}

export function SelectInput<T extends FieldValues>(props: SelectInputProps<T>) {
  return (
    <div className={`form-control`}>
      <label className={`label ${props.label === false && "hidden"}`}>
        <span className="label-text uppercase">{props.name}</span>
      </label>
      <select
        {...props.register(props.name)}
        defaultValue={"Escolha"}
        className={`select select-bordered ${props.className} ${props.error && "input-error"}`}
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
