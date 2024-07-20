import { TextareaHTMLAttributes } from "react";

interface IInputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
}

export function Textarea({ label, ...props }: IInputProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className={`font-bold`} htmlFor={props.id || ""}>
          {label}
        </label>
      )}

      <textarea
        {...props}
        className={`
          input input-bordered w-full max-w-xs
          rounded-xl min-h-[40px] min-w-full 
          bg-transparent
          ${props.className}
        `}
      />
    </div>
  );
}
