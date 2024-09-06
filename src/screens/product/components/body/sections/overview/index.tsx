import ProductScreenBodyOverviewTestimonials from "./components/testimonials";

import { Product } from "src/components/product";
import { Carousel } from "src/shared-components/carousel";

interface ProductScreenBodyOverviewProps {
  product: Product;
  newTestimonial: {
    title: string;
    body: string;
    rating: 0 | 1 | 2 | 3 | 4 | 5;
    onTitleChange: (value: string) => void;
    onBodyChange: (value: string) => void;
    onRatingChange: (value: 0 | 1 | 2 | 3 | 4 | 5) => void;
    onSubmit: () => Promise<void>;
  };
}

export default function ProductScreenBodyOverview({
  product,
  newTestimonial,
}: ProductScreenBodyOverviewProps) {
  return (
    <div className="flex flex-col gap-10">
      {/* images */}
      <Carousel
        images={product.images.map((image) => ({
          src: image,
          alt: `product-${product.title}`,
        }))}
      />
      {/* testimonials */}
      <ProductScreenBodyOverviewTestimonials
        testimonials={product.testimonials}
        newTestimonial={newTestimonial}
      />
    </div>
  );
}
