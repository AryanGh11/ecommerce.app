import { Component, ReactNode } from "react";
import { withTranslation } from "react-i18next";
import { WithTFunction } from "src/types/WithTFunction";
import { ErrorHandler } from "src/abstracts/handleError";

import {
  SimpleIconButtonProps,
  SimpleIconButtonState,
} from "./index.interfaces";

class SimpleIconButton extends Component<
  WithTFunction<SimpleIconButtonProps>,
  SimpleIconButtonState
> {
  state: Readonly<SimpleIconButtonState> = {
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
    const { id, disabled, type, className, icon } = this.props;
    const { isLoading } = this.state;

    return (
      <button
        id={id}
        className={`p-1 items-center justify-center bg-transparent rounded-full text-background disabled:bg-grey disabled:cursor-not-allowed [&:not(:disabled)]:hover:bg-grey-light2 overflow-hidden text-ellipsis text-nowrap font-inter-bold ${className}`}
        onClick={(e) => this._onClick(e)}
        disabled={disabled || isLoading}
        type={type}
      >
        {isLoading ? <span className="loading loading-spinner" /> : icon}
      </button>
    );
  }
}

export default withTranslation()(SimpleIconButton);
