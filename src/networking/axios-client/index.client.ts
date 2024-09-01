import axios from "axios";

import { AxiosError } from "axios";
import { User } from "src/components/user";
import { AxiosRequestConfig, AxiosResponse } from "axios";
import { ErrorHandler } from "../../abstracts/handleError";
import { ApiError, FaildToParseResponse } from "./index.errors";

type ResponseParser<T> = (response: AxiosResponse) => T;

class AxiosClient {
  private static async request<T>(
    config: AxiosRequestConfig,
    parser: ResponseParser<T>
  ): Promise<T> {
    try {
      const user = User.getInstance();

      // Add auth_token to request header if user is logged in
      if (user?.authToken)
        config.headers = {
          auth_token: user.authToken,
          ...config.headers,
        };

      const response = await axios(config);

      try {
        return parser(response);
      } catch (e) {
        ErrorHandler.displayError(e);
        throw new FaildToParseResponse();
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMessage: string =
          error.response?.data.error || "Axios failed to parse error message!";
        throw new ApiError(errorMessage);
      }
      throw error;
    }
  }

  public static async get<T>({
    url,
    parser,
    queryParams,
  }: {
    url?: string;
    parser: ResponseParser<T>;
    queryParams?: Record<string, any>;
  }): Promise<T> {
    const config: AxiosRequestConfig = {
      method: "get",
      url,
      params: queryParams,
    };
    return this.request(config, parser);
  }

  public static async post<T>({
    url,
    parser,
    body,
  }: {
    url?: string;
    parser: ResponseParser<T>;
    body?: any;
  }): Promise<T> {
    const config: AxiosRequestConfig = {
      method: "post",
      url,
      data: body,
    };

    return this.request(config, parser);
  }

  public static async put<T>({
    url,
    parser,
    body,
  }: {
    url?: string;
    parser: ResponseParser<T>;
    body?: any;
  }): Promise<T> {
    const config: AxiosRequestConfig = {
      method: "put",
      url,
      data: body,
    };
    return this.request(config, parser);
  }

  public static async delete<T>({
    url,
    parser,
    body,
  }: {
    url?: string;
    parser: ResponseParser<T>;
    body?: any;
  }): Promise<T> {
    const config: AxiosRequestConfig = {
      method: "delete",
      url,
      data: body,
    };
    return this.request(config, parser);
  }

  public static async patch<T>({
    url,
    parser,
    body,
  }: {
    url?: string;
    parser: ResponseParser<T>;
    body?: any;
  }): Promise<T> {
    const config: AxiosRequestConfig = {
      method: "patch",
      url,
      data: body,
    };

    return this.request(config, parser);
  }
}

export default AxiosClient;
