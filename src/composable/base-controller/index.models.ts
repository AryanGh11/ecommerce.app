import { AxiosResponse } from "axios";

type BuildT<T> = (json: any) => T;

export class BaseControllerOverviewResposne<T> {
  constructor(public readonly data: T[]) {}

  static fromAxiosResponse<T>(
    res: AxiosResponse,
    buildT: BuildT<T>
  ): BaseControllerOverviewResposne<T> {
    // check if response is an array
    if (!Array.isArray(res.data.data))
      throw new Error(
        "Invalid json for BaseControllerGetResposne. Response is not an array."
      );

    // if response is an array, build the array of T and return it
    // each T would throw an error if the json is invalid
    return new BaseControllerOverviewResposne(
      res.data.data.map((json: any) => buildT(json))
    );
  }
}

export class BaseControllerDetailedResposne<T> {
  constructor(public readonly data: T) {}

  static fromAxiosResponse<T>(
    res: AxiosResponse,
    buildT: BuildT<T>
  ): BaseControllerDetailedResposne<T> {
    // if response is an item, build the item of T and return it
    return new BaseControllerDetailedResposne(buildT(res.data));
  }
}
