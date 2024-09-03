import { CategorySummary } from "./index.models";
import { BaseComponentQuery } from "../../composable/base-repository";

export interface ICategoriesQuery extends BaseComponentQuery<CategorySummary> {
  id?: string;
  title?: string;
  subtitle?: string;
  internalName?: string;
  exercise?: string;
}
