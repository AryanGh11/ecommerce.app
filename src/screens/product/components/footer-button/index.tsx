import Translation from "src/translations/locales/translation";

import { useTranslation } from "react-i18next";
import { Product, ProductSummary } from "src/components/product";
import { SimpleOutlineButton } from "src/shared-components/form/fields/buttons/simple-outline-button";
import { SimpleElevatedButton } from "src/shared-components/form/fields/buttons/simple-elevated-button";

interface ProductScreenFooterButtonProps {
  product: Product;
  isAddedToCart: boolean;
  addToCart: (product: ProductSummary) => void;
  removeFromCart: (product: ProductSummary) => void;
}

export default function ProductScreenFooterButton({
  product,
  isAddedToCart,
  addToCart,
  removeFromCart,
}: ProductScreenFooterButtonProps) {
  const { t } = useTranslation();

  return (
    <div className="w-full flex fixed bottom-8 left-0 px-6 z-10">
      {isAddedToCart ? (
        // remove from cart button
        <SimpleOutlineButton
          id="product-remove-from-cart"
          disabled={false}
          onClick={() => removeFromCart(Product.toSummary(product))}
          text={t(Translation.removeFromCart)}
        />
      ) : (
        // add to cart button
        <SimpleElevatedButton
          id="product-add-to-cart"
          disabled={false}
          onClick={() => addToCart(Product.toSummary(product))}
          text={t(Translation.addToCart)}
        />
      )}
    </div>
  );
}
