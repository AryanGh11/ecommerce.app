import { routes } from "src/routes";
import { User } from "src/components/user";
import { useCallback, useEffect } from "react";
import { ErrorHandler } from "src/abstracts/handleError";
import { useEnsureUserIsLoggedInOrNot } from "src/utils/ensureUserIsLoggedInOrNot";

export default function HomeScreen() {
  useEnsureUserIsLoggedInOrNot(routes.home);

  const user = User.getInstance();

  const getUserFromServerAndUpdate = useCallback(async () => {
    // do nothing if user object has null value(s)
    if (Object.values(user).includes(null)) return;

    try {
      await user.getOne(user.id);
    } catch (e) {
      ErrorHandler.displayError(e);
    }
  }, [user]);

  useEffect(() => {
    getUserFromServerAndUpdate();
  }, [getUserFromServerAndUpdate]);

  return (
    <div>
      <h1>Hi {user.nickname}</h1>
      <button
        onClick={() => {
          user.signOut();
          window.location.reload();
        }}
      >
        Signout
      </button>
    </div>
  );
}
