import SimpleInput from "../index.components";

import { withTranslation } from "react-i18next";
import { WithTFunction } from "src/types/WithTFunction";
import { BaseSimpleTextField } from "../index.components";
import { FormFieldErrorMessage } from "../../error-message";
import { SimpleTextInputProps, SimpleTextInputState } from "./index.interfaces";

class SimpleTextInput extends SimpleInput<
  string,
  WithTFunction<SimpleTextInputProps<string>>,
  SimpleTextInputState
> {
  state: Readonly<SimpleTextInputState> = {
    errorMessage: null,
    disabled: true,
  };

  componentDidMount(): void {
    // due to auto focus in form we have to enable the input after 500ms
    setTimeout(() => this.setState({ disabled: false }), 300);
  }

  onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { onChange } = this.props;
    onChange(e.target.value);
  };

  render() {
    const { id, name, placeholder, value, icon, maxLength } = this.props;
    const { errorMessage, disabled } = this.state;

    return icon ? (
      <div className="flex flex-col gap-2">
        <div className="relative">
          {/* icon */}
          <span className="absolute left-4 top-[50%] -translate-y-[50%] z-[1]">
            {icon}
          </span>
          <BaseSimpleTextField
            id={id}
            className="pl-12"
            name={name}
            type="string"
            placeholder={placeholder}
            value={value}
            onChange={this.onInputChange}
            maxLength={maxLength}
            disabled={disabled}
          />
        </div>
        {/* error message */}
        <FormFieldErrorMessage errorMessage={errorMessage} />
      </div>
    ) : (
      <div className="flex flex-col gap-2">
        <BaseSimpleTextField
          id={id}
          name={name}
          type="string"
          placeholder={placeholder}
          value={value}
          onChange={this.onInputChange}
          maxLength={maxLength}
          disabled={disabled}
        />
        {/* error message */}
        <FormFieldErrorMessage errorMessage={errorMessage} />
      </div>
    );
  }
}

export default withTranslation()(SimpleTextInput);
