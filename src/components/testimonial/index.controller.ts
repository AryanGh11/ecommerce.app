import { Endpoints } from "src/constants/endpoints";
import { BaseController } from "src/composable/base-controller";
import { Testimonial, TestimonialSummary } from "./index.models";

import {
  ITestimonialsQuery,
  ITestimonialCreate,
  ITestimonialUpdate,
} from "./index.interfaces";

class TestimonialsController extends BaseController<
  ITestimonialsQuery,
  TestimonialSummary,
  Testimonial,
  ITestimonialCreate,
  ITestimonialUpdate
> {
  constructor() {
    super({
      endpoints: {
        overview: Endpoints.testimonials,
      },
      buildSummary: (json: any) => {
        return TestimonialSummary.fromJson(json);
      },
      buildDetailed: (json: any) => {
        return Testimonial.fromJson(json);
      },
    });
  }
}

export default TestimonialsController;
