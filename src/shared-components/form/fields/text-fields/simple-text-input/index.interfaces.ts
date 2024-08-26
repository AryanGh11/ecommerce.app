import { InputProps, InputState } from "../index.interfaces";

export interface SimpleTextInputProps<T> extends InputProps<T> {
  icon?: JSX.Element;
}

export interface SimpleTextInputState extends InputState {
  disabled: boolean;
}
