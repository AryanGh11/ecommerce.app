import { AxiosResponse } from "axios";

type BuildT<T> = (json: any) => T;

/**
 * @description This class represents the response of the api that returns an array of T.
 *              All endpoints that this class is being used for must return
 *              an array of T as a response.
 * @param {T[]} data - The array of T.
 * @template T - The type of the model (e.g. Product).
 */
export class BaseControllerOverviewResposne<T> {
  constructor(public readonly data: T[]) {}

  /**
   * @description This function is used to build the response of the get method of the base controller.
   * @param {AxiosResponse} res - The response from the backend.
   * @param {BuildT} buildT - The function used to build T from json.
   * @returns {BaseControllerOverviewResposne<T>} - The response of the get method of the base controller.
   */
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

/**
 * @description This class represents the response of the api that returns an item of T.
 *              All endpoints that this class is being used for must return
 *              an item of T as a response.
 * @param {T} data - The item of T.
 * @template T - The type of the model (e.g. Product).
 */
export class BaseControllerDetailedResposne<T> {
  constructor(public readonly data: T) {}

  /**
   * @description This function is used to build the response of the get method of the base controller.
   * @param {AxiosResponse} res - The response from the backend.
   * @param {BuildT} buildT - The function used to build T from json.
   * @returns {BaseControllerDetailedResposne<T>} - The response of the get method of the base controller.
   */
  static fromAxiosResponse<T>(
    res: AxiosResponse,
    buildT: BuildT<T>
  ): BaseControllerDetailedResposne<T> {
    // if response is an item, build the item of T and return it
    return new BaseControllerDetailedResposne(buildT(res.data));
  }
}
