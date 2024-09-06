import { Product } from "src/components/product";

interface ProductScreenBodyFeaturesProps {
  product: Product;
}

export default function ProductScreenBodyFeatures({
  product,
}: ProductScreenBodyFeaturesProps) {
  return (
    <div>
      <p>{product.description}</p>
    </div>
  );
}
