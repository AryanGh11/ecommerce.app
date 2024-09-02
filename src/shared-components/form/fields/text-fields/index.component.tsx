import FormField from "../index.component";

import { ReactElement, RefObject } from "react";
import { InputProps } from "./index.interfaces";
import { FormFieldState } from "../index.interfaces";

export default abstract class SimpleInput<
  T,
  P extends InputProps<T>,
  S extends FormFieldState
> extends FormField<P, S> {
  componentDidUpdate(prevProps: Readonly<P>): void {
    if (prevProps.value !== this.props.value) {
      this.validate();
    }
  }

  validate(): RefObject<HTMLDivElement> | null {
    const { validator, value } = this.props;
    if (validator) {
      const errorMessage = validator(value);
      this.setState({ errorMessage });
      return errorMessage === null ? null : this.ref;
    }
    return null;
  }

  clearInput(): void {
    this.props.onChange("" as T);
    this.setState({ errorMessage: null });
  }

  abstract render(): ReactElement<P> | null;
}

export function BaseSimpleTextField({
  id,
  name,
  type,
  placeholder,
  value,
  onChange,
  maxLength,
  disabled,
  autoFocus,
  className,
}: {
  id: string;
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength: number;
  disabled?: boolean;
  autoFocus?: boolean;
  className?: string;
}) {
  return (
    <input
      id={id}
      className={`w-full h-14 flex justify-center items-center px-4 text-sm rounded-xl bg-white selection:bg-foreground selection:text-background placeholder:text-on-background2 outline outline-on-background2 outline-1 focus:outline-foreground transition-all ${className}`}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      maxLength={maxLength}
      disabled={disabled}
      autoFocus={autoFocus}
    />
  );
}
