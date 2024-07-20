import { ButtonHTMLAttributes } from "react";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  loading?: boolean;
  prefix?: any;
  sufix?: any;
}

export function Button({
  className,
  loading,
  text,
  prefix,
  sufix,
  ...props
}: IButtonProps) {
  return (
    <button
      {...props}
      className={`
        btn btn-active !min-h-max h-[40px] rounded-xl
        ${className}
      `}
    >
      {loading && <span className="loading loading-spinner"></span>}
      {prefix && prefix}
      {text}
      {sufix && sufix}
    </button>
  );
}
