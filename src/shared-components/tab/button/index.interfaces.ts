export interface TabButtonProps {
  id: string;
  label: string;
  active: string;
  onActiveChange: (id: string) => void;
}

export interface TabButtonSkeletonProps {
  length: number;
}
