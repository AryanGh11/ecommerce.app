import { User } from "../index.model";
import { Endpoints } from "src/constants/endpoints";
import { AxiosClient } from "src/networking/axios-client";

export default class UserController {
  static async signInWithEmailAndPassword({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<User> {
    const res = await AxiosClient.post({
      url: Endpoints.users.auth.signInWithEmailAndPassword,
      parser: (res) => {
        return User.fromJson(res.data);
      },
      body: {
        email,
        password,
      },
    });

    return res;
  }

  static async signUpWithEmailAndPassword({
    nickname,
    username,
    email,
    password,
  }: {
    nickname: string;
    username: string;
    email: string;
    password: string;
  }): Promise<User> {
    const res = await AxiosClient.post({
      url: Endpoints.users.auth.signUpWithEmailAndPassword,
      parser: (res) => {
        return User.fromJson(res.data);
      },
      body: {
        nickname,
        username,
        email,
        password,
      },
    });

    return res;
  }

  static async sendEmailVerification(email: string): Promise<void> {
    console.log("SENDING EMAIL VERIFICATION");
    await AxiosClient.post({
      url: Endpoints.users.auth.sendEmailVerification,
      parser: () => {},
      body: {
        email,
      },
    });
  }
}
