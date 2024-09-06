import { TabButtonVariant } from "./index.enum";

export interface TabButtonProps {
  id: string;
  label: string;
  active: boolean;
  onClick: (id: string) => void;
  variant: keyof typeof TabButtonVariant;
}

export interface TabButtonSkeletonProps {
  length: number;
}
