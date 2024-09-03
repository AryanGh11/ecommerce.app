import { Component, ReactNode } from "react";
import { withTranslation } from "react-i18next";
import { WithTFunction } from "src/types/WithTFunction";
import { ErrorHandler } from "src/abstracts/handleError";

import {
  SimpleOutlineButtonProps,
  SimpleOutlineButtonState,
} from "./index.interfaces";

class SimpleOutlineButton extends Component<
  WithTFunction<SimpleOutlineButtonProps>,
  SimpleOutlineButtonState
> {
  state: Readonly<SimpleOutlineButtonState> = {
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
    const { id, disabled, text, className, icon } = this.props;
    const { isLoading } = this.state;

    return (
      <button
        id={id}
        className={`w-full h-14 flex items-center px-4 border-primary border-solid border-[1.5px] rounded-xl text-primary disabled:cursor-not-allowed [&:not(:disabled)]:hover:brightness-95 overflow-hidden text-ellipsis text-nowrap ${className} ${
          icon ? "justify-between" : "justify-center"
        }`}
        onClick={(e) => this._onClick(e)}
        disabled={disabled || isLoading}
        title={text}
      >
        {isLoading ? (
          <span className="loading loading-spinner" />
        ) : (
          <>
            <span className="font-new-atten-bold">{text.toUpperCase()}</span>
            {icon}
          </>
        )}
      </button>
    );
  }
}

export default withTranslation()(SimpleOutlineButton);
