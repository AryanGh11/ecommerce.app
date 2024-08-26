import { Component, ReactNode } from "react";
import { FormProps, FormState } from "./index.interfaces";

export class Form extends Component<FormProps, FormState> {
  _onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { onSubmit } = this.props;
    return onSubmit();
  };

  render(): ReactNode {
    const { children, className } = this.props;
    return (
      <form
        className={`${className} text-foreground`}
        onSubmit={(e) => this._onSubmit(e)}
      >
        {children}
      </form>
    );
  }
}
