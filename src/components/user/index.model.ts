class User {
  private _id: string;
  private _nickname: string;
  private _username: string;
  private _email: string;
  private _authToken: string;
  private _isEmailVerified: boolean;
  private _createdAt: string;
  private _updatedAt: string;

  constructor({
    id,
    nickname,
    username,
    email,
    authToken,
    isEmailVerified,
    createdAt,
    updatedAt,
  }: {
    id: string;
    nickname: string;
    username: string;
    email: string;
    authToken: string;
    isEmailVerified: boolean;
    createdAt: string;
    updatedAt: string;
  }) {
    this._id = id;
    this._nickname = nickname;
    this._username = username;
    this._email = email;
    this._authToken = authToken;
    this._isEmailVerified = isEmailVerified;
    this._createdAt = createdAt;
    this._updatedAt = updatedAt;
  }

  // getters
  get id(): string {
    return this._id;
  }

  get nickname(): string {
    return this._nickname;
  }

  get username(): string {
    return this._username;
  }

  get email(): string {
    return this._email;
  }

  get authToken(): string {
    return this._authToken;
  }

  get isEmailVerified(): boolean {
    return this._isEmailVerified;
  }

  get createdAt(): string {
    return this._createdAt;
  }

  get updatedAt(): string {
    return this._updatedAt;
  }

  public static fromJson(data: any): User {
    console.log(data);
    if (
      typeof data.id !== "string" ||
      typeof data.nickname !== "string" ||
      typeof data.username !== "string" ||
      typeof data.email !== "string" ||
      typeof data.authToken !== "string" ||
      typeof data.isEmailVerified !== "boolean" ||
      typeof data.createdAt !== "string" ||
      typeof data.updatedAt !== "string"
    )
      throw new Error("Invalid json for User");

    return new User({
      id: data.id,
      nickname: data.nickname,
      username: data.username,
      email: data.email,
      authToken: data.authToken,
      isEmailVerified: data.isEmailVerified,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
    });
  }
}

export { User };
