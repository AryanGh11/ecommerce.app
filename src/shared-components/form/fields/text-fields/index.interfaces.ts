import { FormFieldProps, FormFieldState } from "../index.interfaces";

export interface InputProps<T> extends FormFieldProps {
  name: string;
  placeholder: string;
  value: T;
  onChange: (value: T) => void;
  maxLength: number;
  validator?: (value: T) => string | null;
}

export interface InputState extends FormFieldState {}
