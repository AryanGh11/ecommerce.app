import { UserSummary } from "../user";
import { ProductSummary } from "../product";

export class Testimonial {
  id: string;
  title: string;
  body: string;
  user: UserSummary;
  product: ProductSummary;
  rating: 0 | 1 | 2 | 3 | 4 | 5;
  createdAt: string;
  updatedAt: string;

  constructor(data: {
    id: string;
    title: string;
    body: string;
    user: UserSummary;
    product: ProductSummary;
    rating: 0 | 1 | 2 | 3 | 4 | 5;
    createdAt: string;
    updatedAt: string;
  }) {
    this.id = data.id;
    this.title = data.title;
    this.body = data.body;
    this.user = data.user;
    this.product = data.product;
    this.rating = data.rating;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }

  public static fromJson(data: any): Testimonial {
    return new Testimonial(data);
  }
}

export class TestimonialSummary extends Testimonial {}
