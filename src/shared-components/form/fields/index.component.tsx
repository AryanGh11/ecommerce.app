import { Component, ReactElement, RefObject, createRef } from "react";
import { FormFieldProps, FormFieldState } from "./index.interfaces";

export default abstract class FormField<
  P extends FormFieldProps,
  S extends FormFieldState
> extends Component<P, S> {
  ref: RefObject<HTMLDivElement> = createRef();

  abstract clearInput(): void;

  abstract validate(): RefObject<HTMLDivElement> | null;

  abstract render(): ReactElement<P> | null;
}
