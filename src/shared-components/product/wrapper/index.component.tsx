import Translation from "src/translations/locales/translation";

import { useTranslation } from "react-i18next";
import { ProductsWrapperProps } from "./index.interfaces";
import { ProductsCard, ProductsCardSkeleton } from "../card";

export default function ProductsWrapper({ products }: ProductsWrapperProps) {
  const { t } = useTranslation();

  return (
    <div className="w-full h-full flex flex-1 overflow-hidden bg-grey-light2 px-6">
      {products ? (
        products.length === 0 ? (
          <h1>{t(Translation.noProductsFound)}</h1>
        ) : (
          <div className="w-full h-full grid grid-cols-2 gap-4 bg-grey-light2 overflow-auto scrollbar-none py-6">
            {products.map((product) => (
              <ProductsCard key={product.id} product={product} />
            ))}
          </div>
        )
      ) : (
        // loading skeleton
        <div className="w-full h-full grid grid-cols-2 gap-4 bg-grey-light2 overflow-auto scrollbar-none py-6">
          <ProductsCardSkeleton length={10} />
        </div>
      )}
    </div>
  );
}
