import { Endpoints } from "src/constants/endpoints";
import { IProductsQuery } from "./index.interfaces";
import { Product, ProductSummary } from "./index.models";
import { BaseController } from "src/composable/base-controller";

class ProductsController extends BaseController<
  IProductsQuery,
  ProductSummary,
  Product
> {
  constructor() {
    super({
      endpoints: {
        overview: Endpoints.products,
        detailed: Endpoints.products,
      },
      buildSummary: (json: any) => {
        return ProductSummary.fromJson(json);
      },
      buildDetailed: (json: any) => {
        return Product.fromJson(json);
      },
    });
  }
}

export default ProductsController;
