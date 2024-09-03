import CategoriesController from "./index.controller";

import { ICategoriesQuery } from "./index.interfaces";
import { Category, CategorySummary } from "./index.models";
import { BaseRepository } from "src/composable/base-repository";

class CategoriesRepository extends BaseRepository<
  ICategoriesQuery,
  CategorySummary,
  Category
> {
  private static controller = new CategoriesController();

  constructor() {
    super({
      controller: CategoriesRepository.controller,
    });
  }
}

export default CategoriesRepository;
