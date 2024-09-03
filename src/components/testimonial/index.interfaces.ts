import { TestimonialSummary } from "./index.models";
import { BaseComponentQuery } from "../../composable/base-repository";

export interface ITestimonialsQuery
  extends BaseComponentQuery<TestimonialSummary> {
  id?: string;
  title?: string;
  subtitle?: string;
  internalName?: string;
  exercise?: string;
}
