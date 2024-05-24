import {
  FieldError,
  FieldValues,
  Path,
  UseFormRegister,
  UseFormSetError,
} from "react-hook-form";

interface FormFieldProps<T extends FieldValues> {
  error: FieldError | undefined;
  register: UseFormRegister<T>;
  setError: UseFormSetError<T>;
  name: Path<T>;
  type: React.HTMLInputTypeAttribute;
  focus?: boolean;
  placeHolder?: string;
  inputClassName?: string;
  containerClassName?: string
  pattern?: string;
}

function FormField<T extends FieldValues>(props: FormFieldProps<T>) {
  return (
    <div className={`form-control ${props.containerClassName}`}>
      <label className="label">
        <span className="label-text uppercase">{props.name}</span>
      </label>
      <input
        autoFocus={props.focus}
        pattern={props.pattern}
        type={props.type}
        placeholder={props.placeHolder}
        {...props.register(props.name)}
        className={`input input-bordered ${props.inputClassName} ${
          (props.error && "input-error")
        }`}
      />
      <span className="text-error h-5 w-full text-sm pt-2">
        {props.error?.message}
      </span>
    </div>
  );
}

export function FormFieldConstructor<T extends FieldValues>() {
  return FormField<T>
}