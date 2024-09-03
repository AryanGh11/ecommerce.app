import Translation from "src/translations/locales/translation";

import { routes } from "src/routes";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Form } from "src/shared-components/form";
import { LockIcon, MailIcon } from "src/assets/icons";
import { SimpleTextButton } from "src/shared-components/form/fields/buttons/simple-text-button";
import { SimpleTextInput } from "src/shared-components/form/fields/text-fields/simple-text-input";
import { SimpleElevatedButton } from "src/shared-components/form/fields/buttons/simple-elevated-button";
import { SimplePasswordInput } from "src/shared-components/form/fields/text-fields/simple-password-input";

interface SignInScreenFormProps {
  onSubmit: (() => Promise<void>) | (() => void);
  email: string;
  password: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  emailValidator: (value: string) => string | null;
  passwordValidator: (value: string) => string | null;
}

export default function SignInScreenForm({
  onSubmit,
  email,
  password,
  setEmail,
  setPassword,
  emailValidator,
  passwordValidator,
}: SignInScreenFormProps) {
  const { t } = useTranslation();

  const onButtonDisabled = (): boolean => {
    if (emailValidator(email) || passwordValidator(password)) {
      return true;
    } else return false;
  };

  return (
    <Form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <div className="flex flex-col gap-5">
        {/* email */}
        <SimpleTextInput
          id="signin-email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={setEmail}
          maxLength={100}
          validator={emailValidator}
          icon={<MailIcon className="stroke-on-background w-5 h-5" />}
        />
        {/* password */}
        <SimplePasswordInput
          id="signin-password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={setPassword}
          maxLength={100}
          validator={passwordValidator}
          icon={<LockIcon className="stroke-on-background w-5 h-5" />}
        />
        {/* forgot password */}
        <SimpleTextButton
          id="signin-forgotPassword"
          onClick={() => {}}
          text="Forgot Password"
          disabled={false}
        />
      </div>
      {/* submit button */}
      <SimpleElevatedButton
        id="signIn-button"
        disabled={onButtonDisabled()}
        onClick={onSubmit}
        text={t(Translation.signIn)}
        type="submit"
      />
      {/* sign up button */}
      <h1 className="text-center">
        {t(Translation.dontHaveAnAccount)}{" "}
        <Link
          type="button"
          to={routes.signUp}
          className="text-primary underline"
        >
          {t(Translation.signUpHere)}
        </Link>
      </h1>
    </Form>
  );
}
