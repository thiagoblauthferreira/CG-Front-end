import { InputHTMLAttributes } from "react";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export function Input({ label, ...props }: IInputProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className={`font-bold`} htmlFor={props.id || ""}>
          {label}
        </label>
      )}

      <input
        {...props}
        type="text"
        className={`
          input input-bordered w-full max-w-xs
          rounded-xl h-10 min-w-full
          bg-transparent
          ${props.className}
        `}
      />
    </div>
  );
}
