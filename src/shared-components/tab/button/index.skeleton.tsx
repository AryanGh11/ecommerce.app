import { TabButtonSkeletonProps } from "./index.interfaces";

export default function TabButtonSkeleton({ length }: TabButtonSkeletonProps) {
  return (
    <>
      {Array.from({ length }, (_, i) => (
        <div
          key={i}
          className="skeleton min-w-20 h-8 rounded-full bg-grey-light"
        />
      ))}
    </>
  );
}
