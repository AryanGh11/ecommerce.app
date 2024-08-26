import HomeScreen from "./screens/home";
import SignInScreen from "./screens/sign-in";
import SignUpScreen from "./screens/sign-up";
import EmailVerificationScreen from "./screens/email-verification";
import EmailVerificationResponseScreen from "./screens/email-verification-response";

import { useState } from "react";
import { routes } from "./routes";
import { useThemeStore } from "./store";

import {
  Route,
  Routes,
  Navigate,
  BrowserRouter as Router,
} from "react-router-dom";

import {
  Snackbar,
  SnackbarTypes,
  SnackbarProps,
  SnackbarService,
} from "./shared-components/snackbar";

export default function App() {
  const themeStore = useThemeStore();

  const [snackbar, setSnackbar] = useState<SnackbarProps>({
    message: null,
    type: SnackbarTypes.success,
  });

  const showSnackbarCallback = (newSnackbar: SnackbarProps) => {
    setSnackbar(newSnackbar);
  };

  // set the callback in Snackbar service
  SnackbarService.getInstance().setShowSnackbarCallback(showSnackbarCallback);

  return (
    <div data-theme={themeStore.mode}>
      <Snackbar {...snackbar} />
      <Router>
        <Routes>
          <Route
            path={routes.emailVerification}
            element={<EmailVerificationScreen />}
          />
          <Route
            path={routes.emailVerificationResponse}
            element={<EmailVerificationResponseScreen />}
          />
          <Route path={routes.home} element={<HomeScreen />} />
          <Route path={routes.signIn} element={<SignInScreen />} />
          <Route path={routes.signUp} element={<SignUpScreen />} />
          <Route path="*" element={<Navigate to={routes.home} />} />
        </Routes>
      </Router>
    </div>
  );
}
