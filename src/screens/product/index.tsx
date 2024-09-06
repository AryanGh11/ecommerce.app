import ProductScreenBody from "./components/body";
import ProductScreenHeader from "./components/header";
import Translation from "src/translations/locales/translation";
import ProductScreenFooterButton from "./components/footer-button";

import { useCartStore } from "src/store";
import { User } from "src/components/user";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ErrorHandler } from "src/abstracts/handleError";
import { useCallback, useEffect, useState } from "react";

import {
  Product,
  ProductSummary,
  ProductsRepository,
} from "src/components/product";

import {
  ITestimonialCreate,
  TestimonialsRepository,
} from "src/components/testimonial";

export default function ProductScreen() {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const [error, setError] = useState<string | null>(null);
  const [product, setProduct] = useState<Product | null>(null);
  const [isAddedToCart, setIsAddedToCart] = useState<boolean>(false);
  const [newTestimonialTitle, setNewTestimonialTitle] = useState<string>("");
  const [newTestimonialBody, setNewTestimonialBody] = useState<string>("");
  const [newTestimonialRating, setNewTestimonialRating] = useState<
    0 | 1 | 2 | 3 | 4 | 5
  >(0);
  const cartStore = useCartStore();

  const user = User.getInstance();

  const productsRepository = new ProductsRepository();
  const testimonialsRepository = new TestimonialsRepository();

  const fetchProductFromServer = async () => {
    try {
      if (!id) return;
      const product = await productsRepository.getOne(id);
      setProduct(product);
    } catch (e) {
      const error = ErrorHandler.getErrorMessages(e);
      setError(error);
    }
  };

  useEffect(() => {
    fetchProductFromServer();
  }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

  // update button state based on isAddedToShop boolean
  const updateIsAddedToShop = useCallback(() => {
    setIsAddedToCart(cartStore.cart.some((p) => p.id === product?.id));
  }, [cartStore.cart, product?.id]);

  useEffect(() => {
    updateIsAddedToShop();
  }, [updateIsAddedToShop]);

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

  // post new testimonial to product
  const postNewTestimonialToProduct = async () => {
    if (!product) return;
    if (!user.id) return;

    const payload: ITestimonialCreate = {
      title: newTestimonialTitle,
      body: newTestimonialBody,
      user: user.id,
      product: product.id,
      rating: newTestimonialRating,
    };
    try {
      await testimonialsRepository.create(payload);
      // re-fetch the product after posting the testimonial
      await fetchProductFromServer();
      // reset all new testimonial values
      setNewTestimonialTitle("");
      setNewTestimonialBody("");
      setNewTestimonialRating(0);
    } catch (e) {
      ErrorHandler.displayError(e);
    }
  };

  return (
    <section className="w-full min-h-[100svh] flex flex-col pt-12 pb-24">
      {error ? (
        <div className="w-full h-full flex flex-col gap-4 flex-1 items-center justify-center px-6">
          <h1 className="text-2xl font-inter-bold">
            {t(Translation.somethingWentWrong)}
          </h1>
          <p className="text-center !leading-7">{error}</p>
        </div>
      ) : product ? (
        // product screen
        <div className="w-full h-full flex flex-col gap-4">
          {/* header */}
          <ProductScreenHeader />
          {/* body */}
          <ProductScreenBody
            product={product}
            newTestimonial={{
              title: newTestimonialTitle,
              body: newTestimonialBody,
              rating: newTestimonialRating,
              onTitleChange: setNewTestimonialTitle,
              onBodyChange: setNewTestimonialBody,
              onRatingChange: setNewTestimonialRating,
              onSubmit: postNewTestimonialToProduct,
            }}
          />
          {/* footer button */}
          <ProductScreenFooterButton
            product={product}
            isAddedToCart={isAddedToCart}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        </div>
      ) : (
        // loading
        <div className="w-full h-full flex flex-1 items-center justify-center">
          <span className="loading loading-spinner loading-md" />
        </div>
      )}
    </section>
  );
}
