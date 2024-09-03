import { Endpoints } from "src/constants/endpoints";
import { ICategoriesQuery } from "./index.interfaces";
import { Category, CategorySummary } from "./index.models";
import { BaseController } from "src/composable/base-controller";

class CategoriesController extends BaseController<
  ICategoriesQuery,
  CategorySummary,
  Category
> {
  constructor() {
    super({
      endpoints: {
        overview: Endpoints.categories,
        detailed: Endpoints.categories,
      },
      buildSummary: (json: any) => {
        return CategorySummary.fromJson(json);
      },
      buildDetailed: (json: any) => {
        return Category.fromJson(json);
      },
    });
  }
}

export default CategoriesController;
