import SimpleInput from "../index.component";

import { withTranslation } from "react-i18next";
import { WithTFunction } from "src/types/WithTFunction";
import { CloseEyeIcon, EyeIcon } from "src/assets/icons";
import { FormFieldErrorMessage } from "src/shared-components/form-field-error-message";

import {
  SimplePasswordInputProps,
  SimplePasswordInputState,
} from "./index.interfaces";

class SimplePasswordInput extends SimpleInput<
  string,
  WithTFunction<SimplePasswordInputProps<string>>,
  SimplePasswordInputState
> {
  state: Readonly<SimplePasswordInputState> = {
    isPasswordHidden: true,
    errorMessage: null,
  };

  onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { onChange } = this.props;
    onChange(e.target.value);
  };

  onInputTypeChange = () => {
    const { isPasswordHidden } = this.state;
    isPasswordHidden
      ? this.setState({ isPasswordHidden: false })
      : this.setState({ isPasswordHidden: true });
  };

  render() {
    const { id, name, placeholder, value, icon, maxLength } = this.props;
    const { isPasswordHidden, errorMessage } = this.state;

    return icon ? (
      <div className="flex flex-col gap-2">
        <div className="relative">
          {/* icon */}
          <span className="absolute left-4 top-[50%] -translate-y-[50%]">
            {icon}
          </span>
          <input
            id={id}
            className="w-full h-14 flex justify-center items-center px-4 pl-12 pr-12 text-sm rounded-xl bg-white selection:bg-foreground selection:text-background placeholder:text-on-background2 border-solid border-0 border-foreground focus:border-2 transition-all"
            name={name}
            type={isPasswordHidden ? "password" : "text"}
            placeholder={placeholder}
            value={value}
            onChange={(e) => this.onInputChange(e)}
            autoFocus={false}
            maxLength={maxLength}
          />
          {/* eye icon */}
          <span
            className="absolute right-4 top-[16px] cursor-pointer"
            onClick={this.onInputTypeChange}
          >
            {isPasswordHidden ? (
              <EyeIcon className="stroke-foreground w-5 h-5" />
            ) : (
              <CloseEyeIcon className="stroke-foreground w-5 h-5" />
            )}
          </span>
        </div>
        {/* error message */}
        <FormFieldErrorMessage errorMessage={errorMessage} />
      </div>
    ) : (
      <div className="flex flex-col gap-2">
        <div className="relative">
          <input
            id={id}
            className="w-full h-14 flex justify-center items-center px-4 text-sm rounded-xl bg-white selection:bg-foreground selection:text-background placeholder:text-on-background2 border-solid border-0 border-foreground focus:border-2 transition-all"
            name={name}
            type={isPasswordHidden ? "password" : "text"}
            placeholder={placeholder}
            value={value}
            onChange={(e) => this.onInputChange(e)}
            autoFocus={false}
            maxLength={maxLength}
          />
          {/* eye icon */}
          <span
            className="absolute right-4 top-[16px] cursor-pointer"
            onClick={this.onInputTypeChange}
          >
            {isPasswordHidden ? (
              <EyeIcon className="stroke-foreground w-5 h-5" />
            ) : (
              <CloseEyeIcon className="stroke-foreground w-5 h-5" />
            )}
          </span>
        </div>
        {/* error message */}
        <FormFieldErrorMessage errorMessage={errorMessage} />
      </div>
    );
  }
}

export default withTranslation()(SimplePasswordInput);
