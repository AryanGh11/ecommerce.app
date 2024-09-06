import Translation from "src/translations/locales/translation";

import { useCartStore } from "src/store";
import { StarIcon } from "src/assets/icons";
import { useTranslation } from "react-i18next";
import { ProductsCardProps } from "./index.interfaces";
import { ProductSummary } from "src/components/product";
import { useCallback, useEffect, useState } from "react";
import { SimpleOutlineButton } from "../../form/fields/buttons/simple-outline-button";
import { SimpleElevatedButton } from "../../form/fields/buttons/simple-elevated-button";
import { Link } from "react-router-dom";

export default function ProductsCard({ product }: ProductsCardProps) {
  const { t } = useTranslation();
  const cartStore = useCartStore();
  const [isAddedToCart, setIsAddedToCart] = useState<boolean>(
    cartStore.cart.some((p) => p.id === product.id)
  );

  // update button state based on isAddedToCart boolean
  const updateIsAddedToCart = useCallback(() => {
    setIsAddedToCart(cartStore.cart.some((p) => p.id === product.id));
  }, [cartStore.cart, product.id]);

  useEffect(() => {
    updateIsAddedToCart();
  }, [updateIsAddedToCart]);

  // add to cart function
  const addToCart = (product: ProductSummary) => {
    cartStore.addToCart(product);
    setIsAddedToCart(true);
  };

  // remove from cart function
  const removeFromCart = (product: ProductSummary) => {
    cartStore.removeFromCart(product);
    setIsAddedToCart(false);
  };

  return (
    <Link to={`/products/${product.id}`}>
      <div className="flex flex-col gap-5 bg-background h-fit p-4 rounded-2xl">
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
          {isAddedToCart ? (
            // remove from cart button
            <SimpleOutlineButton
              id="home-remove-from-cart-button"
              disabled={false}
              onClick={() => {
                removeFromCart(product);
              }}
              text={t(Translation.remove)}
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
              text={t(Translation.add)}
              className="!h-10"
            />
          )}
        </div>
      </div>
    </Link>
  );
}
