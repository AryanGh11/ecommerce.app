import { TestimonialCard } from "../card";
import { TestimonialWrapperProps } from "./index.interface";

export default function TestimonialWrapper({
  testimonials,
}: TestimonialWrapperProps) {
  return (
    <div className="flex flex-col gap-6">
      {testimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
      ))}
    </div>
  );
}
