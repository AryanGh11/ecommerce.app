import SignInScreenForm from "./components/form";
import Translation from "src/translations/locales/translation";

import { useState } from "react";
import { routes } from "src/routes";
import { User } from "src/components/user";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ErrorHandler } from "src/abstracts/handleError";
import { useEnsureUserIsLoggedInOrNot } from "src/utils/ensureUserIsLoggedInOrNot";

export default function SignInScreen() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const user = User.getInstance();

  useEnsureUserIsLoggedInOrNot(routes.signIn);

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

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
    if (emailValidator(email) || passwordValidator(password)) return;

    try {
      await user.signInWithEmailAndPassword({
        email,
        password,
      });
      // redirect to home
      navigate(routes.home);
    } catch (e) {
      ErrorHandler.displayError(e);
    }
  };

  return (
    <section className="w-full h-[100svh] flex flex-col justify-between py-32 px-6 text-foreground bg-background">
      {/* title & description */}
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-6xl font-inter-bold text-center">
          {t(Translation.audio)}
        </h1>
        <p>{t(Translation.itsModularAndDesignedToLast)}</p>
      </div>
      {/* sign in form */}
      <SignInScreenForm
        onSubmit={onSubmit}
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        emailValidator={emailValidator}
        passwordValidator={passwordValidator}
      />
    </section>
  );
}
