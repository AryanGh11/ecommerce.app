import { BaseController } from "../base-controller";
import { BaseComponentQuery } from "./index.interfaces";

class BaseRepository<Query extends BaseComponentQuery<S>, S, D, C, U> {
  private readonly controller: BaseController<Query, S, D, C, U>;

  constructor({
    controller,
  }: {
    controller: BaseController<Query, S, D, C, U>;
  }) {
    this.controller = controller;
  }

  async get({ query }: { query?: Query } = {}): Promise<S[]> {
    const response = await this.controller.get({
      query,
    });
    return response;
  }

  async getOne(id: string): Promise<D> {
    const response = await this.controller.getOne(id);
    return response;
  }

  async create(payload: C): Promise<D> {
    const response = await this.controller.create(payload);
    return response;
  }
}

export default BaseRepository;
