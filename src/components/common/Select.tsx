import { SelectHTMLAttributes } from "react";

interface IOption {
  label: string;
  value: string;
  disabeld?: boolean;
  selected?: boolean;
}
interface ISelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: IOption[];
  label?: string;
}

export function Select({ label, options, ...props }: ISelectProps) {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className={`font-bold`} htmlFor={props.id || ""}>
          {label}
        </label>
      )}

      <select
        {...props}
        className={`
          select select-bordered w-full max-w-xs
          rounded-xl min-h-max h-10 min-w-full
          bg-transparent
          ${props.className}
        `}
      >
        {options.map((option, index) => {
          return (
            <option
              key={`option-${option.value}-${index}`}
              disabled={option.disabeld}
              selected={option.selected}
              value={option.value}
            >
              {option.label}
            </option>
          );
        })}
      </select>
    </div>
  );
}
