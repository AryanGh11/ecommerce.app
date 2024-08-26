import { useEffect } from "react";
import { routes } from "../routes";
import { useUser } from "../hooks/useUser";
import { useNavigate } from "react-router-dom";

export function useEnsureUserIsLoggedInOrNot(route: routes) {
  const user = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      if (route === routes.signIn) {
        navigate(routes.signIn);
      } else {
        navigate(routes.signUp);
      }
    } else if (user.isEmailVerified === false) {
      if (route === routes.emailVerification) {
        navigate(routes.emailVerification);
      }
    } else {
      navigate(routes.home);
    }
  }, [user, navigate, route]);
}
