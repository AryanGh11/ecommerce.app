import SignUpScreenForm from "./components/form";
import Translation from "src/translations/locales/translation";

import { useState } from "react";
import { routes } from "src/routes";
import { User } from "src/components/user";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ErrorHandler } from "src/abstracts/handleError";
import { useEnsureUserIsLoggedInOrNot } from "src/utils/ensureUserIsLoggedInOrNot";

export default function SignUpScreen() {
  const { t } = useTranslation();

  useEnsureUserIsLoggedInOrNot(routes.signUp);

  const navigate = useNavigate();
  const user = User.getInstance();

  const [nickname, setNickname] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const nicknameValidator = (value: string) => {
    if (value.length > 0) {
      return null;
    } else {
      return t(Translation.nicknameCannotBeEmpty);
    }
  };

  const usernameValidator = (value: string) => {
    if (value.length > 0) {
      return null;
    } else {
      return t(Translation.usernameCannotBeEmpty);
    }
  };

  const emailValidator = (value: string) => {
    // regular expression for validating email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // test if the email string matches the regex
    if (emailRegex.test(value)) {
      return null;
    } else {
      return t(Translation.emailNotValid);
    }
  };

  const passwordValidator = (value: string) => {
    if (value.length < 6) {
      return "Password should be more than 6 characters";
    }
    return null;
  };

  const onSubmit = async () => {
    if (
      nicknameValidator(nickname) ||
      usernameValidator(username) ||
      emailValidator(email) ||
      passwordValidator(password)
    )
      return;

    try {
      // create user, unverified
      await user.signUpWithEmailAndPassword({
        nickname,
        username,
        email,
        password,
      });
      // navigate to email verification screen
      navigate(routes.emailVerification);
    } catch (e) {
      ErrorHandler.displayError(e);
    }
  };

  return (
    <section className="w-full h-[100svh] flex flex-col justify-between py-32 px-6 text-foreground bg-background">
      {/* title & description */}
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-6xl font-inter-bold text-center">
          {t(Translation.welcome)}
        </h1>
        <p>{t(Translation.itsModularAndDesignedToLast)}</p>
      </div>
      {/* sign up form */}
      <SignUpScreenForm
        onSubmit={onSubmit}
        nickname={nickname}
        username={username}
        email={email}
        password={password}
        setNickname={setNickname}
        setUsername={setUsername}
        setEmail={setEmail}
        setPassword={setPassword}
        nicknameValidator={nicknameValidator}
        usernameValidator={usernameValidator}
        emailValidator={emailValidator}
        passwordValidator={passwordValidator}
      />
    </section>
  );
}
