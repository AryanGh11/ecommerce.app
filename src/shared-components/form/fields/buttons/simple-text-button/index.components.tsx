import { Component, ReactNode } from "react";
import { ErrorHandler } from "src/abstracts/handleError";
import {
  SimpleTextButtonProps,
  SimpleTextButtonState,
} from "./index.interfaces";

export default class SimpleTextButton extends Component<
  SimpleTextButtonProps,
  SimpleTextButtonState
> {
  state: Readonly<SimpleTextButtonState> = {
    isLoading: false,
  };

  _onClick = async (e: React.MouseEvent) => {
    const { onClick } = this.props;
    this.setState({ isLoading: true });
    try {
      await onClick(e);
    } catch (error) {
      ErrorHandler.displayError(e);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  render(): ReactNode {
    const { id, disabled, text, className, type } = this.props;
    const { isLoading } = this.state;

    return (
      <button
        id={id}
        className={`h-14 flex items-center justify-center px-16 bg-transparent rounded-full text-primary font-inter-bold disabled:opacity-50 disabled:cursor-not-allowed [&:not(:disabled)]:hover:opacity-60 overflow-hidden text-ellipsis text-nowrap transition-all ${className}`}
        onClick={(e) => this._onClick(e)}
        disabled={disabled || isLoading}
        title={text}
        type={type}
      >
        {isLoading ? (
          <span className="loading loading-spinner" />
        ) : (
          text.toUpperCase()
        )}
      </button>
    );
  }
}
