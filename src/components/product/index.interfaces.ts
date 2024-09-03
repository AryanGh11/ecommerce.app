import { ProductSummary } from "./index.models";
import { BaseComponentQuery } from "../../composable/base-repository";

export interface IProductsQuery extends BaseComponentQuery<ProductSummary> {
  id?: string;
  title?: string;
  categories?: string;
}
