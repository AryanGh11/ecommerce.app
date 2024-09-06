import { ButtonProps, ButtonState } from "../index.interfaces";

export interface SimpleIconButtonProps extends Omit<ButtonProps, "text"> {
  icon: React.ReactNode;
}

export interface SimpleIconButtonState extends ButtonState {}
