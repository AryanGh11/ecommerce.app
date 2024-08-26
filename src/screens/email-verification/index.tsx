import Translation from "src/translations/locales/translation";
import manWithHeadphoneImage from "src/assets/images/man-with-headphone.png";

import { routes } from "src/routes";
import { useUser } from "src/hooks/useUser";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { UserController } from "src/components/user";
import { ErrorHandler } from "src/abstracts/handleError";
import { useEnsureUserIsLoggedInOrNot } from "src/utils/ensureUserIsLoggedInOrNot";
import { SimpleElevatedButton } from "src/shared-components/form/fields/buttons/simple-elevated-button";

export default function EmailVerificationScreen() {
  const { t } = useTranslation();

  useEnsureUserIsLoggedInOrNot(routes.emailVerification);

  const user = useUser();
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
      await UserController.sendEmailVerification(user!.email!);
      setEmailHasBeenSent(true);
    } catch (e) {
      ErrorHandler.displayError(e);
    }
  };

  return (
    <section
      className="flex flex-col justify-between py-32 px-6 text-white text-center"
      style={{
        backgroundImage: `url(${manWithHeadphoneImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100svh",
      }}
    >
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
