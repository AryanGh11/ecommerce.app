import TestimonialsController from "./index.controller";

import { BaseRepository } from "src/composable/base-repository";
import { Testimonial, TestimonialSummary } from "./index.models";

import {
  ITestimonialsQuery,
  ITestimonialCreate,
  ITestimonialUpdate,
} from "./index.interfaces";

class TestimonialsRepository extends BaseRepository<
  ITestimonialsQuery,
  TestimonialSummary,
  Testimonial,
  ITestimonialCreate,
  ITestimonialUpdate
> {
  private static controller = new TestimonialsController();

  constructor() {
    super({
      controller: TestimonialsRepository.controller,
    });
  }
}

export default TestimonialsRepository;
