import { TestimonialSummary } from "./index.models";
import { BaseComponentQuery } from "../../composable/base-repository";

export interface ITestimonialsQuery
  extends BaseComponentQuery<TestimonialSummary> {
  id?: string;
  title?: string;
}

export interface ITestimonialCreate {
  title: string;
  body: string;
  user: string;
  product: string;
  rating: number;
}

export interface ITestimonialUpdate {
  title?: string;
  body?: string;
  rating?: number;
}
