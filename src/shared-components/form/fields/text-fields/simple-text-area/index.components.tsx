import SimpleArea, { BaseSimpleTextArea } from "../index.components";

import { withTranslation } from "react-i18next";
import { WithTFunction } from "src/types/WithTFunction";
import { FormFieldErrorMessage } from "../../error-message";
import { SimpleTextAreaProps, SimpleTextAreaState } from "./index.interfaces";

class SimpleTextArea extends SimpleArea<
  string,
  WithTFunction<SimpleTextAreaProps<string>>,
  SimpleTextAreaState
> {
  state: Readonly<SimpleTextAreaState> = {
    errorMessage: null,
    disabled: true,
  };

  componentDidMount(): void {
    // due to auto focus in form we have to enable the input after 500ms
    setTimeout(() => this.setState({ disabled: false }), 300);
  }

  onAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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
          <BaseSimpleTextArea
            id={id}
            className="pl-12"
            name={name}
            placeholder={placeholder}
            value={value}
            onChange={this.onAreaChange}
            maxLength={maxLength}
            disabled={disabled}
          />
        </div>
        {/* error message */}
        <FormFieldErrorMessage errorMessage={errorMessage} />
      </div>
    ) : (
      <div className="flex flex-col gap-2">
        <BaseSimpleTextArea
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={this.onAreaChange}
          maxLength={maxLength}
          disabled={disabled}
        />
        {/* error message */}
        <FormFieldErrorMessage errorMessage={errorMessage} />
      </div>
    );
  }
}

export default withTranslation()(SimpleTextArea);
