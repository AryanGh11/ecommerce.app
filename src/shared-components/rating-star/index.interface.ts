export interface RatingStarProps {
  value: 0 | 1 | 2 | 3 | 4 | 5;
  onChange: (value: 0 | 1 | 2 | 3 | 4 | 5) => void;
  isEditable: boolean;
}
