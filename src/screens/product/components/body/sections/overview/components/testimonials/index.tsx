import Translation from "src/translations/locales/translation";

import { useTranslation } from "react-i18next";
import { Form } from "src/shared-components/form";
import { RatingStar } from "src/shared-components/rating-star";
import { TestimonialSummary } from "src/components/testimonial";
import { TestimonialWrapper } from "src/shared-components/testimonials/wrapper";
import { SimpleTextArea } from "src/shared-components/form/fields/text-fields/simple-text-area";
import { SimpleTextInput } from "src/shared-components/form/fields/text-fields/simple-text-input";
import { SimpleElevatedButton } from "src/shared-components/form/fields/buttons/simple-elevated-button";

interface ProductScreenBodyOverviewTestimonialsProps {
  testimonials: TestimonialSummary[];
  newTestimonial: {
    title: string;
    body: string;
    rating: 0 | 1 | 2 | 3 | 4 | 5;
    onTitleChange: (value: string) => void;
    onBodyChange: (value: string) => void;
    onRatingChange: (value: 0 | 1 | 2 | 3 | 4 | 5) => void;
    onSubmit: () => Promise<void>;
  };
}

export default function ProductScreenBodyOverviewTestimonials({
  testimonials,
  newTestimonial,
}: ProductScreenBodyOverviewTestimonialsProps) {
  const { t } = useTranslation();

  return (
    <div className="w-full flex flex-col gap-8">
      {/* title */}
      <h1 className="text-normal">
        {t(Translation.reviewX, {
          count: testimonials.length,
        })}
      </h1>
      {/* new testimonial form */}
      <Form onSubmit={newTestimonial.onSubmit} className="flex flex-col gap-3">
        {/* rating */}
        <div className="w-full flex justify-between items-center">
          <h1>{t(Translation.howMuchDoYouLikeThisProduct)}</h1>
          <RatingStar
            value={newTestimonial.rating}
            onChange={newTestimonial.onRatingChange}
            isEditable={true}
          />
        </div>
        {/* title input */}
        <SimpleTextInput
          id="product-overview-newTestimonialTitle"
          name="newTestimonialTitle"
          placeholder={t(Translation.whatForDoYouWantWriting)}
          value={newTestimonial.title}
          onChange={newTestimonial.onTitleChange}
          maxLength={100}
          validator={() => null}
        />
        {/* body input */}
        <SimpleTextArea
          id="product-overview-newTestimonialBody"
          name="newTestimonialBody"
          placeholder={t(Translation.describeItHere)}
          value={newTestimonial.body}
          onChange={newTestimonial.onBodyChange}
          maxLength={20000}
          validator={() => null}
        />
        {/* post testimonial */}
        <SimpleElevatedButton
          id="product-overview-newTestimonialButton"
          disabled={false}
          onClick={newTestimonial.onSubmit}
          text={t(Translation.post)}
          className="!h-10 !text-sm"
        />
      </Form>
      {/* testimonials */}
      <TestimonialWrapper testimonials={testimonials} />
    </div>
  );
}
