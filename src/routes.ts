export class routes {
  public static get emailVerification(): string {
    return "/email-verification";
  }

  public static get emailVerificationResponse(): string {
    return "/email-verification-response";
  }

  public static get home(): string {
    return "/";
  }

  public static get signIn(): string {
    return "/sign-in";
  }

  public static get signUp(): string {
    return "/sign-up";
  }
}
