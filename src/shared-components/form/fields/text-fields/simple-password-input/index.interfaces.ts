import { InputProps, InputState } from "../index.interfaces";

export interface SimplePasswordInputProps<T> extends InputProps<T> {
  icon?: JSX.Element;
}

export interface SimplePasswordInputState extends InputState {
  isPasswordHidden: boolean;
}
