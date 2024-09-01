import { ButtonHTMLAttributes } from "react";
import { FormFieldProps } from "../index.interfaces";

export interface ButtonProps extends FormFieldProps {
  text: string;
  onClick: (e: React.MouseEvent) => Promise<void> | void;
  disabled: boolean;
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  className?: string;
}

export interface ButtonState {
  isLoading: boolean;
}
