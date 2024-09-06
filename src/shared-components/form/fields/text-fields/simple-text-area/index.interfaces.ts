import { InputProps, InputState } from "../index.interfaces";

export interface SimpleTextAreaProps<T> extends InputProps<T> {
  icon?: JSX.Element;
}

export interface SimpleTextAreaState extends InputState {
  disabled: boolean;
}
