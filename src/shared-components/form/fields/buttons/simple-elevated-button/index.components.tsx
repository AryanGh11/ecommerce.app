import { Component, ReactNode } from "react";
import { withTranslation } from "react-i18next";
import { WithTFunction } from "src/types/WithTFunction";
import { ErrorHandler } from "src/abstracts/handleError";

import {
  SimpleElevatedButtonProps,
  SimpleElevatedButtonState,
} from "./index.interfaces";

class SimpleElevatedButton extends Component<
  WithTFunction<SimpleElevatedButtonProps>,
  SimpleElevatedButtonState
> {
  state: Readonly<SimpleElevatedButtonState> = {
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
    const { id, disabled, text, className } = this.props;
    const { isLoading } = this.state;

    return (
      <button
        id={id}
        className={`w-full h-14 flex items-center justify-center px-4 bg-primary rounded-xl text-background disabled:cursor-not-allowed [&:not(:disabled)]:hover:brightness-95 overflow-hidden text-ellipsis text-nowrap font-inter-bold shadow-md ${className}`}
        onClick={(e) => this._onClick(e)}
        disabled={disabled || isLoading}
        title={text}
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

export default withTranslation()(SimpleElevatedButton);
