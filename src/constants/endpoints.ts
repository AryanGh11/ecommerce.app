const baseUrl = process.env.REACT_APP_BASE_URL;

export class Endpoints {
  static users = {
    auth: {
      signInWithEmailAndPassword: `${baseUrl}/users/auth/sign-in`,
      signUpWithEmailAndPassword: `${baseUrl}/users/auth/sign-up`,
      sendEmailVerification: `${baseUrl}/users/auth/send-email-verification`,
    },
  };
}
