import { CategorySummary } from "../categories";
import { TestimonialSummary } from "../testimonial";
import { ErrorHandler } from "src/abstracts/handleError";

export class Product {
  id: string;
  title: string;
  description: string;
  categories: CategorySummary[];
  price: number;
  quantity: number;
  images: string[];
  rating: 0 | 1 | 2 | 3 | 4 | 5;
  testimonials: TestimonialSummary[];
  createdAt: string;
  updatedAt: string;

  constructor(data: {
    id: string;
    title: string;
    description: string;
    categories: CategorySummary[];
    price: number;
    quantity: number;
    images: string[];
    rating: 0 | 1 | 2 | 3 | 4 | 5;
    testimonials: TestimonialSummary[];
    createdAt: string;
    updatedAt: string;
  }) {
    if (
      typeof data.id !== "string" ||
      typeof data.title !== "string" ||
      typeof data.description !== "string" ||
      !Array.isArray(data.categories) ||
      typeof data.price !== "number" ||
      typeof data.quantity !== "number" ||
      !Array.isArray(data.images) ||
      data.rating > 5 ||
      !Array.isArray(data.testimonials) ||
      typeof data.createdAt !== "string" ||
      typeof data.updatedAt !== "string"
    ) {
      ErrorHandler.displayError(new Error("Invalida json for Products"));
    }

    this.id = data.id;
    this.title = data.title;
    this.description = data.description;
    this.categories = data.categories;
    this.price = data.price;
    this.quantity = data.quantity;
    this.images = data.images;
    this.rating = data.rating;
    this.testimonials = data.testimonials;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }

  public static fromJson(data: any): Product {
    return new Product(data);
  }

  public static toSummary(product: Product) {
    return new ProductSummary({
      ...product,
      categoriesCount: product.categories.length,
      testimonialsCount: product.testimonials.length,
    });
  }
}

export class ProductSummary {
  id: string;
  title: string;
  description: string;
  categoriesCount: number;
  price: number;
  quantity: number;
  images: string[];
  rating: 0 | 1 | 2 | 3 | 4 | 5;
  testimonialsCount: number;
  createdAt: string;
  updatedAt: string;

  constructor(data: {
    id: string;
    title: string;
    description: string;
    categoriesCount: number;
    price: number;
    quantity: number;
    images: string[];
    rating: 0 | 1 | 2 | 3 | 4 | 5;
    testimonialsCount: number;
    createdAt: string;
    updatedAt: string;
  }) {
    this.id = data.id;
    this.title = data.title;
    this.description = data.description;
    this.categoriesCount = data.categoriesCount;
    this.price = data.price;
    this.quantity = data.quantity;
    this.images = data.images;
    this.rating = data.rating;
    this.testimonialsCount = data.testimonialsCount;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }

  public static fromJson(data: any): ProductSummary {
    return new ProductSummary(data);
  }
}
