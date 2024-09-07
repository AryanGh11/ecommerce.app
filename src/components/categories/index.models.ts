import { ProductSummary } from "../product";
import { ErrorHandler } from "src/abstracts/handleError";

export class Category {
  id: string;
  title: string;
  key: string;
  products: ProductSummary[];
  createdAt: string;
  updatedAt: string;

  constructor(data: {
    id: string;
    title: string;
    key: string;
    products: ProductSummary[];
    createdAt: string;
    updatedAt: string;
  }) {
    if (
      typeof data.id !== "string" ||
      typeof data.title !== "string" ||
      typeof data.key !== "string" ||
      !Array.isArray(data.products) ||
      typeof data.createdAt !== "string" ||
      typeof data.updatedAt !== "string"
    ) {
      ErrorHandler.displayError(new Error("Invalida json for Categories"));
    }

    this.id = data.id;
    this.title = data.title;
    this.key = data.key;
    this.products = data.products;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }

  public static fromJson(data: any): Category {
    return new Category(data);
  }
}

export class CategorySummary {
  id: string;
  title: string;
  key: string;
  productsCount: number;
  createdAt: string;
  updatedAt: string;

  constructor(data: {
    id: string;
    title: string;
    key: string;
    productsCount: number;
    createdAt: string;
    updatedAt: string;
  }) {
    this.id = data.id;
    this.title = data.title;
    this.key = data.key;
    this.productsCount = data.productsCount;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }

  public static fromJson(data: any): CategorySummary {
    return new CategorySummary(data);
  }
}
