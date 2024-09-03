import Translation from "src/translations/locales/translation";

import { useTranslation } from "react-i18next";
import { ProductsWrapperProps } from "./index.interfaces";
import { ProductsCard, ProductsCardSkeleton } from "../card";

export default function ProductsWrapper({ products }: ProductsWrapperProps) {
  const { t } = useTranslation();

  return (
    <div className="p-6 w-full h-full bg-grey-light2">
      {products ? (
        products.length === 0 ? (
          <h1>{t(Translation.noProductsFound)}</h1>
        ) : (
          <div className="grid grid-cols-2 gap-4">
            {products.map((product) => (
              <ProductsCard key={product.id} product={product} />
            ))}
          </div>
        )
      ) : (
        // loading skeleton
        <div className="grid grid-cols-2 gap-4">
          <ProductsCardSkeleton length={10} />
        </div>
      )}
    </div>
  );
}
