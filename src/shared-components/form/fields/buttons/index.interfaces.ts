import { FormFieldProps } from "../index.interfaces";

export interface ButtonProps extends FormFieldProps {
  text: string;
  onClick: (e: React.MouseEvent) => Promise<void> | void;
  disabled: boolean;
  className?: string;
}

export interface ButtonState {
  isLoading: boolean;
}
