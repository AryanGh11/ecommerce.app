import { ProductSummary } from "src/components/product";

export interface ProductsCardProps {
  product: ProductSummary;
}

export interface ProductsCardSkeletonProps {
  length: number;
}
