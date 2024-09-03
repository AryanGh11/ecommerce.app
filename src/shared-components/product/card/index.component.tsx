import Translation from "src/translations/locales/translation";

import { useCartStore } from "src/store";
import { StarIcon } from "src/assets/icons";
import { useTranslation } from "react-i18next";
import { ProductsCardProps } from "./index.interfaces";
import { ProductSummary } from "src/components/product";
import { useCallback, useEffect, useState } from "react";
import { SimpleOutlineButton } from "../../form/fields/buttons/simple-outline-button";
import { SimpleElevatedButton } from "../../form/fields/buttons/simple-elevated-button";

export default function ProductsCard({ product }: ProductsCardProps) {
  const { t } = useTranslation();
  const cartStore = useCartStore();
  const [isAddedToShop, setIsAddedToShop] = useState<boolean>(
    cartStore.cart.some((p) => p.id === product.id)
  );

  // update button state based on isAddedToShop boolean
  const updateIsAddedToShop = useCallback(() => {
    setIsAddedToShop(cartStore.cart.some((p) => p.id === product.id));
  }, [cartStore.cart, product.id]);

  useEffect(() => {
    updateIsAddedToShop();
  }, [updateIsAddedToShop]);

  // add to cart function
  const addToCart = (product: ProductSummary) => {
    cartStore.addToCart(product);
    setIsAddedToShop(true);
  };

  // remove from cart function
  const removeFromCart = (product: ProductSummary) => {
    cartStore.removeFromCart(product);
    setIsAddedToShop(false);
  };

  return (
    <div className="flex flex-col gap-5 bg-background p-4 rounded-2xl">
      {/* image */}
      <img
        src={product.images[0]}
        alt={product.title}
        className="w-full aspect-square object-contain"
      />
      {/* informations */}
      <div className="flex flex-col gap-3">
        {/* title & price */}
        <div className="flex flex-col gap-1">
          {/* title */}
          <h1 className="text-base w-full overflow-clip text-ellipsis whitespace-nowrap">
            {product.title}
          </h1>
          {/* price */}
          <p className="text-sm font-inter-bold">
            {t(Translation.usd, { price: product.price })}
          </p>
        </div>
        {/* rating & testimonials */}
        <div className="flex gap-3">
          {/* rating */}
          <div className="flex items-center gap-1/2">
            <StarIcon className="fill-accent w-4 h-4 -translate-y-[1px]" />
            <p className="text-xs">{product.rating}</p>
          </div>
          {/* number of testimonials */}
          <p className="text-xs">
            {t(Translation.review, {
              count: product.testimonialsCount,
            })}
          </p>
        </div>
        {isAddedToShop ? (
          // remove from cart button
          <SimpleOutlineButton
            id="home-remove-from-cart-button"
            disabled={false}
            onClick={() => {
              removeFromCart(product);
            }}
            text={t(Translation.removeFromCart)}
            className="!h-10"
          />
        ) : (
          // add to cart button
          <SimpleElevatedButton
            id="home-add-to-cart-button"
            disabled={false}
            onClick={() => {
              addToCart(product);
            }}
            text={t(Translation.addToCart)}
            className="!h-10"
          />
        )}
      </div>
    </div>
  );
}
