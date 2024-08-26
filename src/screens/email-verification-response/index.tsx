import Translation from "src/translations/locales/translation";
import manWithHeadphoneImage from "src/assets/images/man-with-headphone.png";

import { useEffect } from "react";
import { routes } from "src/routes";
import { useUserStore } from "src/store";
import { User } from "src/components/user";
import { useUser } from "src/hooks/useUser";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { useEnsureUserIsLoggedInOrNot } from "src/utils/ensureUserIsLoggedInOrNot";
import { SimpleElevatedButton } from "src/shared-components/form/fields/buttons/simple-elevated-button";

export default function EmailVerificationResponseScreen() {
  const { t } = useTranslation();

  useEnsureUserIsLoggedInOrNot(routes.emailVerificationResponse);

  const userStore = useUserStore();
  const currentUser = useUser();

  const location = useLocation();
  const success: boolean =
    new URLSearchParams(location.search).get("success") === "true"
      ? true
      : false;

  useEffect(() => {
    if (success) {
      // update user in store
      userStore.setUser(
        new User({
          id: userStore.id!,
          nickname: currentUser!.nickname!,
          username: currentUser!.username!,
          email: currentUser!.email!,
          authToken: currentUser!.authToken!,
          isEmailVerified: true,
          createdAt: currentUser!.createdAt!,
          updatedAt: currentUser!.updatedAt!,
        })
      );
    }
  }, [success]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <section
      className="flex flex-col justify-center items-center gap-16 py-32 px-6 text-white"
      style={{
        backgroundImage: `url(${manWithHeadphoneImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100svh",
      }}
    >
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
