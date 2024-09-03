const baseUrl = process.env.REACT_APP_BASE_URL;

export class Endpoints {
  static auth = {
    signInWithEmailAndPassword: `${baseUrl}/auth/sign-in`,
    signUpWithEmailAndPassword: `${baseUrl}/auth/sign-up`,
    sendEmailVerification: `${baseUrl}/auth/send-email-verification`,
  };
  static users = {
    getOne(id: string) {
      return `${baseUrl}/users/${id}`;
    },
  };
  static products = `${baseUrl}/products`;
  static testimonials = `${baseUrl}/testimonials`;
  static categories = `${baseUrl}/categories`;
}
