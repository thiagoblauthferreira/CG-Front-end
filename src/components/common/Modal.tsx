import React from "react";
import { BsXLg } from "react-icons/bs";

interface IModalProps {
  className?: string;
  open: boolean;
  close: () => void;
  children: React.ReactNode;
  removeBtnClose?: boolean;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

export function Modal({
  className = "",
  open = false,
  close,
  children,
  removeBtnClose = false,
  header,
  footer,
}: IModalProps) {
  return (
    <div
      className={`
        fixed z-10 inset-0 top-0 left-0 w-screen h-screen
        flex justify-center items-center transition-colors
        ${open ? "visible bg-gray-100/30 backdrop-blur-sm" : "invisible"}
      `}
      onClick={close}
    >
      <div
        className={`
          overflow-hidden relative
          bg-white rounded-lg shadow transition-all
          ${open ? "scale-100 opacity-100" : "scale-125 opacity-0"}
          ${className}
        `}
        onClick={(event) => event.stopPropagation()}
      >
        {!removeBtnClose && (
          <div
            className={`
              cursor-pointer absolute z-10 top-0 right-0 transition-all
              m-3 flex items-center justify-center size-8
              text-gray-1 rounded-lg bg-white/30 backdrop-blur-sm
              hover:bg-gray-100/40 active:bg-gray-100/30
            `}
            onClick={close}
          >
            <BsXLg />
          </div>
        )}
        {header && <div className="border-b border-solid border-gray-500">{header}</div>}
        {children}
        {footer && <div className="border-t border-solid border-gray-500">{footer}</div>}
      </div>
    </div>
  );
}
