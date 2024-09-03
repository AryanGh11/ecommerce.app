import { ProductsCardSkeletonProps } from "./index.interfaces";

export default function ProductsCardSkeleton({
  length,
}: ProductsCardSkeletonProps) {
  return (
    <>
      {Array.from({ length }, (_, i) => (
        <div
          key={i}
          className="flex flex-col gap-5 bg-background p-4 rounded-2xl skeleton"
        >
          {/* image */}
          <div className="w-full skeleton bg-grey-light aspect-square" />
          {/* informations */}
          <div className="flex flex-col gap-3">
            {/* title & price */}
            <div className="flex flex-col gap-1">
              {/* title */}
              <div className="w-full h-5 skeleton bg-grey-light" />
              {/* price */}
              <div className="skeleton h-4 bg-grey-light" />
            </div>
            <div className="w-full flex justify-between items-center">
              {/* rating & testimonials */}
              <div className="flex gap-3 h-5 skeleton bg-grey-light w-full" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
