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
  className?: string;
  pattern?: string;
}

export function FormField<T extends FieldValues>(props: FormFieldProps<T>) {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text uppercase">{props.name}</span>
      </label>
      <input
        autoFocus={props.focus}
        pattern={props.pattern}
        type={props.type}
        placeholder={props.placeHolder}
        {...props.register(props.name)}
        className={`input input-bordered ${props.className} ${
          (props.error && "input-error")
        }`}
      />
      <span className="text-error h-5 w-full text-xs pt-2">
        {props.error?.message}
      </span>
    </div>
  );
}
