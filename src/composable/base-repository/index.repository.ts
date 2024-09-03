import { BaseController } from "../base-controller";
import { BaseComponentQuery } from "./index.interfaces";
/**
 * @description This base repository is used to reduce the amount of code needed
 *              to create a repository.
 *              All endpoints used by this repository and their responses must
 *              comply with the BaseControllerEndpoints and BaseControllerGetResposne and etc.
 *
 * @template Query - The type of the query model (e.g. ProductQuery).
 * @template Sort - The type of the sort model (e.g. ProductSort).
 * @template S - The type of the summary model (e.g. ProductSummary).
 * @param {BaseController<Query, Sort, S, D>} controller - The controller used to communicate with the backend.
 */
class BaseRepository<Query extends BaseComponentQuery<S>, S, D> {
  private readonly controller: BaseController<Query, S, D>;

  constructor({ controller }: { controller: BaseController<Query, S, D> }) {
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
}

export default BaseRepository;
