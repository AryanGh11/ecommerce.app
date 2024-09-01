import { useEffect } from "react";
import { routes } from "../routes";
import { User } from "../components/user";
import { useNavigate } from "react-router-dom";

export function useEnsureUserIsLoggedInOrNot(route: routes) {
  const user = User.getInstance();

  const navigate = useNavigate();

  const isUserLoggedIn = !Object.values(user).includes(null);

  useEffect(() => {
    if (!isUserLoggedIn) {
      if (route === routes.signIn) {
        // ensures the user is sign out and clean up the storage
        user.signOut();
        navigate(routes.signIn);
      } else {
        // ensures the user is sign out and clean up the storage
        user.signOut();
        navigate(routes.signUp);
      }
    } else if (user.isEmailVerified === false) {
      if (route === routes.emailVerification) {
        navigate(routes.emailVerification);
      } else if (route === routes.emailVerificationResponse) {
        navigate(routes.emailVerificationResponse);
      }
    } else {
      navigate(routes.home);
    }
  }, [user, navigate, route, isUserLoggedIn]);
}
