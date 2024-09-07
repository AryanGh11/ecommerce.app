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

interface SignUpScreenFormProps {
  onSubmit: (() => Promise<void>) | (() => void);
  nickname: string;
  username: string;
  email: string;
  password: string;
  setNickname: (nickname: string) => void;
  setUsername: (username: string) => void;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  nicknameValidator: (value: string) => string | null;
  usernameValidator: (value: string) => string | null;
  emailValidator: (value: string) => string | null;
  passwordValidator: (value: string) => string | null;
}

export default function SignUpScreenForm({
  onSubmit,
  nickname,
  username,
  email,
  password,
  setNickname,
  setUsername,
  setEmail,
  setPassword,
  nicknameValidator,
  usernameValidator,
  emailValidator,
  passwordValidator,
}: SignUpScreenFormProps) {
  const { t } = useTranslation();

  const onButtonDisabled = (): boolean => {
    if (
      nicknameValidator(nickname) ||
      usernameValidator(username) ||
      emailValidator(email) ||
      passwordValidator(password)
    ) {
      return true;
    } else return false;
  };

  return (
    <Form className="flex flex-col gap-8" onSubmit={onSubmit}>
      <div className="flex flex-col gap-5">
        {/* nickname */}
        <SimpleTextInput
          id="signin-nickname"
          name="nickname"
          placeholder={t(Translation.nickname)}
          value={nickname}
          onChange={setNickname}
          maxLength={100}
          validator={nicknameValidator}
          icon={<MailIcon className="stroke-on-background w-5 h-5" />}
        />
        {/* username */}
        <SimpleTextInput
          id="signin-username"
          name="username"
          placeholder={t(Translation.username)}
          value={username}
          onChange={setUsername}
          maxLength={100}
          validator={usernameValidator}
          icon={<MailIcon className="stroke-on-background w-5 h-5" />}
        />
        {/* email */}
        <SimpleTextInput
          id="signin-email"
          name="email"
          placeholder={t(Translation.email)}
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
          placeholder={t(Translation.password)}
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
          text={t(Translation.forgotPassword)}
          disabled={false}
        />
      </div>
      {/* submit button */}
      <SimpleElevatedButton
        id="signUp-button"
        disabled={onButtonDisabled()}
        onClick={onSubmit}
        text={t(Translation.signUp)}
      />
      {/* sign in button */}
      <h1 className="text-center">
        {t(Translation.haveAnAccount)}{" "}
        <Link to={routes.signIn} className="text-primary underline">
          {t(Translation.signInHere)}
        </Link>
      </h1>
    </Form>
  );
}
