import ProductScreenBodyOverview from "./sections/overview";
import ProductScreenBodyFeatures from "./sections/features";
import Translation from "src/translations/locales/translation";
import ProductScreenBodySpecification from "./sections/specification";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Product } from "src/components/product";
import { TabWrapper } from "src/shared-components/tab/wrapper";
import { TabButton, TabButtonProps } from "src/shared-components/tab/button";

interface ProductScreenBodyProps {
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

enum ProductSections {
  overview = "overview",
  features = "features",
  specification = "specification",
}

export default function ProductScreenBody({
  product,
  newTestimonial,
}: ProductScreenBodyProps) {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState<ProductSections>(
    ProductSections.overview
  );

  const tabsOptions: TabButtonProps[] = [
    {
      id: "overview",
      label: t(Translation.overview),
      active: activeSection === ProductSections.overview,
      onClick: (v) => setActiveSection(v as ProductSections),
      variant: "outlined",
    },
    {
      id: "features",
      label: t(Translation.features),
      active: activeSection === ProductSections.features,
      onClick: (v) => setActiveSection(v as ProductSections),
      variant: "outlined",
    },
    {
      id: "specification",
      label: t(Translation.specification),
      active: activeSection === ProductSections.specification,
      onClick: (v) => setActiveSection(v as ProductSections),
      variant: "outlined",
    },
  ];

  return (
    <div className="flex flex-col gap-8 px-6 h-full">
      {/* price & title */}
      <div className="flex flex-col gap-2">
        {/* price */}
        <p className="text-normal font-inter-bold text-primary">
          {t(Translation.usd, { price: product.price })}
        </p>
        {/* title */}
        <p className="text-3xl font-inter-bold">{product.title}</p>
      </div>
      {/* tabs */}
      <TabWrapper className="!rounded-none">
        {tabsOptions.map((tab) => (
          <TabButton
            id={tab.id}
            key={tab.id}
            label={tab.label}
            active={tab.active}
            onClick={tab.onClick}
            variant={tab.variant}
          />
        ))}
      </TabWrapper>
      {/* dynamic sections */}
      {activeSection === ProductSections.overview ? (
        // overview section
        <ProductScreenBodyOverview
          product={product}
          newTestimonial={newTestimonial}
        />
      ) : activeSection === ProductSections.features ? (
        // features section
        <ProductScreenBodyFeatures product={product} />
      ) : (
        // specification section
        <ProductScreenBodySpecification product={product} />
      )}
    </div>
  );
}
