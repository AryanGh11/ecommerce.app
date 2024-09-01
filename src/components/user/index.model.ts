import UserController from "./controller";

import { ErrorHandler } from "src/abstracts/handleError";

export class User {
  private static instance: User;
  private _id: string | null = null;
  private _nickname: string | null = null;
  private _username: string | null = null;
  private _email: string | null = null;
  private _authToken: string | null = null;
  private _isEmailVerified: boolean | null = null;

  private constructor() {}

  public static getInstance(): User {
    if (!User.instance) {
      User.instance = new User();
      User.instance.loadFromLocalStorage();
    }
    return User.instance;
  }

  public get id(): string | null {
    return this._id;
  }

  private set id(value: string | null) {
    this._id = value;
    value === null
      ? localStorage.removeItem("user_id")
      : localStorage.setItem("user_id", value);
  }

  public get nickname(): string | null {
    return this._nickname;
  }

  private set nickname(value: string | null) {
    this._nickname = value;
    value === null
      ? localStorage.removeItem("user_nickname")
      : localStorage.setItem("user_nickname", value);
  }

  public get username(): string | null {
    return this._username;
  }

  private set username(value: string | null) {
    this._username = value;
    value === null
      ? localStorage.removeItem("user_username")
      : localStorage.setItem("user_username", value);
  }

  public get email(): string | null {
    return this._email;
  }

  private set email(value: string | null) {
    this._email = value;
    value === null
      ? localStorage.removeItem("user_email")
      : localStorage.setItem("user_email", value);
  }

  public get authToken(): string | null {
    return this._authToken;
  }

  private set authToken(value: string | null) {
    this._authToken = value;

    value === null
      ? localStorage.removeItem("user_auth_token")
      : localStorage.setItem("user_auth_token", value);
  }

  public get isEmailVerified(): boolean | null {
    return this._isEmailVerified;
  }

  private set isEmailVerified(value: boolean | null) {
    this._isEmailVerified = value;
    value === null
      ? localStorage.removeItem("user_is_email_verified")
      : localStorage.setItem("user_is_email_verified", value.toString());
  }

  public static fromJson(data: any): User {
    const user = User.getInstance();

    user.id = data.id;
    user.nickname = data.nickname;
    user.username = data.username;
    user.email = data.email;
    user.authToken = data.authToken;
    user.isEmailVerified = data.isEmailVerified;

    return user;
  }

  public updateIsEmailVerified(isEmailVerified: boolean): void {
    this.isEmailVerified = isEmailVerified;
  }

  private setToLocalStorage(user: any): void {
    // validate object
    if (
      typeof user.id !== "string" ||
      typeof user.nickname !== "string" ||
      typeof user.username !== "string" ||
      typeof user.email !== "string" ||
      typeof user.authToken !== "string" ||
      typeof user.isEmailVerified !== "boolean"
    ) {
      ErrorHandler.displayError(new Error("invalid user object"));
    }

    localStorage.setItem("user_id", user.id);
    localStorage.setItem("user_nickname", user.nickname);
    localStorage.setItem("user_username", user.username);
    localStorage.setItem("user_email", user.email);
    localStorage.setItem("user_auth_token", user.authToken);
    localStorage.setItem("user_is_email_verified", user.isEmailVerified);
  }

  private loadFromLocalStorage(): void {
    this._id = localStorage.getItem("user_id");
    this._nickname = localStorage.getItem("user_nickname");
    this._username = localStorage.getItem("user_username");
    this._email = localStorage.getItem("user_email");
    this._authToken = localStorage.getItem("user_auth_token");
    this._isEmailVerified =
      localStorage.getItem("user_is_email_verified") === "true" ? true : false;
  }

  // Auth methods
  public async signInWithEmailAndPassword({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<void> {
    const user = await UserController.signInWithEmailAndPassword({
      email,
      password,
    });

    this.setToLocalStorage(user);
  }

  public async signUpWithEmailAndPassword({
    nickname,
    username,
    email,
    password,
  }: {
    nickname: string;
    username: string;
    email: string;
    password: string;
  }): Promise<void> {
    const user = await UserController.signUpWithEmailAndPassword({
      nickname,
      username,
      email,
      password,
    });

    this.setToLocalStorage(user);
  }

  public signOut(): void {
    localStorage.removeItem("user_id");
    localStorage.removeItem("user_nickname");
    localStorage.removeItem("user_username");
    localStorage.removeItem("user_email");
    localStorage.removeItem("user_auth_token");
    localStorage.removeItem("user_is_email_verified");
  }

  public async getOne(id: string | null): Promise<User> {
    // Check if id is null
    if (!id) {
      ErrorHandler.displayError(new Error(`Cannot find user with id: ${id}`));
    }
    const user = await UserController.getOne(id!);
    this.setToLocalStorage(user);
    return user;
  }

  public async sendEmailVerification(email: string): Promise<void> {
    try {
      await UserController.sendEmailVerification(email);
      this.updateIsEmailVerified(true);
    } catch (e) {
      ErrorHandler.displayError(e);
    }
  }
}
