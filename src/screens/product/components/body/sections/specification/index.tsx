import { Product } from "src/components/product";
import { Carousel } from "src/shared-components/carousel";

interface ProductScreenBodySpecificationProps {
  product: Product;
}

export default function ProductScreenBodySpecification({
  product,
}: ProductScreenBodySpecificationProps) {
  return (
    <Carousel
      images={product.images.map((image) => ({
        src: image,
        alt: `product-${product.title}`,
      }))}
    />
  );
}
