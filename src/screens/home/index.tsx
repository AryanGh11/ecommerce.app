import { routes } from "src/routes";
import { useUserStore } from "src/store";
import { useUser } from "src/hooks/useUser";
import { useEnsureUserIsLoggedInOrNot } from "src/utils/ensureUserIsLoggedInOrNot";

export default function HomeScreen() {
  const user = useUser();

  useEnsureUserIsLoggedInOrNot(routes.home);

  const userStore = useUserStore();

  return (
    <div>
      <h1>Hi {user?.nickname}!</h1>
      <button
        onClick={() => {
          userStore.clearUser();
          window.location.reload();
        }}
      >
        Signout
      </button>
    </div>
  );
}
