import Translation from "src/translations/locales/translation";

import { routes } from "src/routes";
import { User } from "src/components/user";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ErrorHandler } from "src/abstracts/handleError";
import { useEnsureUserIsLoggedInOrNot } from "src/utils/ensureUserIsLoggedInOrNot";
import { SimpleElevatedButton } from "src/shared-components/form/fields/buttons/simple-elevated-button";

export default function EmailVerificationScreen() {
  const { t } = useTranslation();

  useEnsureUserIsLoggedInOrNot(routes.emailVerification);

  const user = User.getInstance();
  const navigate = useNavigate();

  const [emailHasBeenSent, setEmailHasBeenSent] = useState<boolean>(false);

  // Check if email is already verified
  useEffect(() => {
    if (!user) {
      navigate(routes.signIn);
    }
  }, [user, navigate]);

  // send verification email
  const onSubmit = async () => {
    try {
      await user.sendEmailVerification(user.email!);
      setEmailHasBeenSent(true);
    } catch (e) {
      ErrorHandler.displayError(e);
    }
  };

  return (
    <section className="w-full h-[100svh] flex flex-col justify-between py-32 px-6 text-white text-center bg-white">
      {!emailHasBeenSent ? (
        <>
          <div className="flex flex-col items-center gap-2">
            <h1 className="text-4xl font-inter-bold">
              {t(Translation.emailVerification)}
            </h1>
            <p>
              {t(Translation.pleaseClickOnThisButtonToSendEmailVerification)}
            </p>
          </div>
          <SimpleElevatedButton
            id="emailVerification-sendEmailButton"
            disabled={false}
            onClick={onSubmit}
            text={t(Translation.sendEmail)}
          />
        </>
      ) : (
        <p>{t(Translation.pleaseCheckYourEmail)}</p>
      )}
    </section>
  );
}
