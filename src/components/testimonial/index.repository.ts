import TestimonialsController from "./index.controller";

import { ITestimonialsQuery } from "./index.interfaces";
import { BaseRepository } from "src/composable/base-repository";
import { Testimonial, TestimonialSummary } from "./index.models";

class TestimonialsRepository extends BaseRepository<
  ITestimonialsQuery,
  TestimonialSummary,
  Testimonial
> {
  private static controller = new TestimonialsController();

  constructor() {
    super({
      controller: TestimonialsRepository.controller,
    });
  }
}

export default TestimonialsRepository;
