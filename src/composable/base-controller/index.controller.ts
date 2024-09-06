import AxiosClient from "src/networking/axios-client/index.client";

import { BaseControllerEndpoints } from "./index.interfaces";

import {
  BaseControllerDetailedResposne,
  BaseControllerOverviewResposne,
} from "./index.models";

class BaseController<Query, S, D, C, U> {
  private readonly endpoints: BaseControllerEndpoints;
  private readonly buildSummary: (json: any) => S;
  private readonly buildDetailed: (json: any) => D;

  constructor({
    endpoints,
    buildSummary,
    buildDetailed,
  }: {
    endpoints: BaseControllerEndpoints;
    buildSummary: (json: any) => S;
    buildDetailed: (json: any) => D;
  }) {
    this.endpoints = endpoints;
    this.buildSummary = buildSummary;
    this.buildDetailed = buildDetailed;
  }

  async get({
    query,
  }: {
    query?: Query;
  } = {}): Promise<S[]> {
    const res = await AxiosClient.get({
      url: this.endpoints.overview,
      parser: (res) =>
        BaseControllerOverviewResposne.fromAxiosResponse<S>(
          res,
          this.buildSummary
        ),
      queryParams: query as Record<string, any>,
    });
    return res.data;
  }

  async getOne(id: string): Promise<D> {
    const res = await AxiosClient.get({
      url: `${this.endpoints.overview}/${id}`,
      parser: (res) =>
        BaseControllerDetailedResposne.fromAxiosResponse<D>(
          res,
          this.buildDetailed
        ),
    });
    return res.data;
  }

  async create(payload: C): Promise<D> {
    const res = await AxiosClient.post({
      url: this.endpoints.overview,
      parser: (res) =>
        BaseControllerDetailedResposne.fromAxiosResponse<D>(
          res,
          this.buildDetailed
        ),
      body: payload,
    });
    return res.data;
  }

  async update(payload: U): Promise<D> {
    const res = await AxiosClient.put({
      url: this.endpoints.overview,
      parser: (res) =>
        BaseControllerDetailedResposne.fromAxiosResponse<D>(
          res,
          this.buildDetailed
        ),
      body: payload,
    });
    return res.data;
  }
}

export default BaseController;
