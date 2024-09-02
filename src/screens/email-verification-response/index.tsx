import Translation from "src/translations/locales/translation";

import { useEffect } from "react";
import { routes } from "src/routes";
import { User } from "src/components/user";
import { useTranslation } from "react-i18next";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { SimpleElevatedButton } from "src/shared-components/form/fields/buttons/simple-elevated-button";

export default function EmailVerificationResponseScreen() {
  const { t } = useTranslation();

  const user = User.getInstance();
  const navigate = useNavigate();

  const location = useLocation();
  const success: boolean =
    new URLSearchParams(location.search).get("success") === "true"
      ? true
      : false;

  useEffect(() => {
    if (!user) {
      // redirect to sign up if the user was null
      navigate(routes.signUp);
    }

    if (success) {
      // update user in store
      user.updateIsEmailVerified(true);
    }
  }, [success, location]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section className="w-full h-[100svh] flex flex-col justify-center items-center gap-16 py-32 px-6 text-foreground bg-background">
      <div className="flex flex-col gap-2">
        {/* title & description */}
        <h1 className="text-2xl font-inter-bold text-center">
          {t(Translation.emailSuccessfullyVerified)}
        </h1>
        <h1 className="text-center">{`${t(
          Translation.thankYouForYourTime
        )} 😁`}</h1>
      </div>
      {/* back to home button */}
      <Link to={routes.home} className="w-full">
        <SimpleElevatedButton
          id="signUp-button"
          disabled={false}
          onClick={() => {}}
          text={t(Translation.backToHome)}
        />
      </Link>
    </section>
  );
}
