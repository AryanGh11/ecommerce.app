import ProductsController from "./index.controller";

import { IProductsQuery } from "./index.interfaces";
import { Product, ProductSummary } from "./index.models";
import { BaseRepository } from "src/composable/base-repository";

class ProductsRepository extends BaseRepository<
  IProductsQuery,
  ProductSummary,
  Product
> {
  private static controller = new ProductsController();

  constructor() {
    super({
      controller: ProductsRepository.controller,
    });
  }
}

export default ProductsRepository;
