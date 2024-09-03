import { Endpoints } from "src/constants/endpoints";
import { ITestimonialsQuery } from "./index.interfaces";
import { BaseController } from "src/composable/base-controller";
import { Testimonial, TestimonialSummary } from "./index.models";

class TestimonialsController extends BaseController<
  ITestimonialsQuery,
  TestimonialSummary,
  Testimonial
> {
  constructor() {
    super({
      endpoints: {
        overview: Endpoints.testimonials,
        detailed: Endpoints.testimonials,
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
