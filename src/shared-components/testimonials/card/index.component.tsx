import { useState } from "react";
import { RatingStar } from "../../rating-star";
import { DateFormatter } from "src/utils/DateFormatter";
import { TestimonialCardProps } from "./index.interface";

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  const [rating, setRating] = useState<0 | 1 | 2 | 3 | 4 | 5>(
    testimonial.rating
  );

  return (
    <div className="flex gap-3 relative">
      {testimonial ? (
        <>
          {/* user's avatar */}
          <img
            src={testimonial.user.avatarUrl}
            alt={testimonial.user.username}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-1">
              {/* user's nickname */}
              <p>{testimonial.user.nickname}</p>
              {/* rating */}
              <RatingStar
                value={rating}
                onChange={setRating}
                isEditable={false}
              />
            </div>
            <div className="flex flex-col gap-1">
              {/* title */}
              <p className="font-inter-medium">{testimonial.title}</p>
              {/* body */}
              <p className="opacity-60 text-sm">{testimonial.body}</p>
            </div>
            {/* created at */}
            <p className="absolute top-0 right-0 text-sm opacity-50">
              {DateFormatter.timeAgo(new Date(testimonial.createdAt))}
            </p>
          </div>
        </>
      ) : (
        // skeleton
        <></>
      )}
    </div>
  );
}
