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
