import { RatingStarProps } from "./index.interface";

export default function RatingStar({
  value,
  onChange,
  isEditable,
}: RatingStarProps) {
  return (
    <div className="rating rating-sm">
      <input
        type="radio"
        name="rating-2"
        className={`mask mask-star-2 ${
          value >= 1 ? "bg-accent" : "bg-grey-light"
        } ${!isEditable && "cursor-default"}`}
        value={value}
        onChange={() => (isEditable ? onChange(1) : {})}
      />
      <input
        type="radio"
        name="rating-2"
        className={`mask mask-star-2 ${
          value >= 2 ? "bg-accent" : "bg-grey-light"
        } ${!isEditable && "cursor-default"}`}
        value={value}
        onChange={() => (isEditable ? onChange(2) : {})}
      />
      <input
        type="radio"
        name="rating-2"
        className={`mask mask-star-2 ${
          value >= 3 ? "bg-accent" : "bg-grey-light"
        } ${!isEditable && "cursor-default"}`}
        value={value}
        onChange={() => (isEditable ? onChange(3) : {})}
      />
      <input
        type="radio"
        name="rating-2"
        className={`mask mask-star-2 ${
          value >= 4 ? "bg-accent" : "bg-grey-light"
        } ${!isEditable && "cursor-default"}`}
        value={value}
        onChange={() => (isEditable ? onChange(4) : {})}
      />
      <input
        type="radio"
        name="rating-2"
        className={`mask mask-star-2 ${
          value >= 5 ? "bg-accent" : "bg-grey-light"
        } ${!isEditable && "cursor-default"}`}
        value={value}
        onChange={() => (isEditable ? onChange(5) : {})}
      />
    </div>
  );
}
