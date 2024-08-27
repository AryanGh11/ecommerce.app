import SimpleInput from "../index.component";

import { withTranslation } from "react-i18next";
import { WithTFunction } from "src/types/WithTFunction";
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
          <span className="absolute left-4 top-[50%] -translate-y-[50%]">
            {icon}
          </span>
          <input
            id={id}
            className="w-full h-14 flex justify-center items-center px-4 pl-12 text-sm rounded-xl bg-white selection:bg-foreground selection:text-background placeholder:text-on-background2 border-solid border-0 border-foreground focus:border-2 transition-all"
            name={name}
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={(e) => this.onInputChange(e)}
            maxLength={maxLength}
            disabled={disabled}
          />
        </div>
        {/* error message */}
        <FormFieldErrorMessage errorMessage={errorMessage} />
      </div>
    ) : (
      <div className="flex flex-col gap-2">
        <input
          id={id}
          className="w-full h-14 flex justify-center items-center px-4 text-sm rounded-xl bg-white selection:bg-foreground selection:text-background placeholder:text-on-background2 border-solid border-0 border-foreground focus:border-2 transition-all"
          name={name}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => this.onInputChange(e)}
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
