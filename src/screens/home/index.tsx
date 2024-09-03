import Translation from "src/translations/locales/translation";

import { routes } from "src/routes";
import { User } from "src/components/user";
import { SearchIcon } from "src/assets/icons";
import { useTranslation } from "react-i18next";
import { Header } from "src/shared-components/header";
import { ErrorHandler } from "src/abstracts/handleError";
import { useCallback, useEffect, useState } from "react";
import { TabWrapper } from "src/shared-components/tab/wrapper";
import { ProductsWrapper } from "src/shared-components/product/wrapper";
import { ProductsRepository, ProductSummary } from "src/components/product";
import { TabButton, TabButtonSkeleton } from "src/shared-components/tab/button";
import { useEnsureUserIsLoggedInOrNot } from "src/utils/ensureUserIsLoggedInOrNot";
import { SimpleTextInput } from "src/shared-components/form/fields/text-fields/simple-text-input";

import {
  CategorySummary,
  CategoriesRepository,
} from "src/components/categories";

export default function HomeScreen() {
  useEnsureUserIsLoggedInOrNot(routes.home);

  const { t } = useTranslation();

  const [search, setSearch] = useState<string>("");
  const [products, setProducts] = useState<ProductSummary[] | null>(null);
  const [categories, setCategories] = useState<CategorySummary[] | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>(
    categories ? categories.map((category) => category.id).join(",") : ""
  );

  const user = User.getInstance();
  const productsRepository = new ProductsRepository();
  const categoriesRepository = new CategoriesRepository();

  // update user
  const getUserFromServerAndUpdate = useCallback(async () => {
    // do nothing if user object has null value(s)
    if (Object.values(user).includes(null)) return;

    try {
      await user.getOne(user.id);
    } catch (e) {
      ErrorHandler.displayError(e);
    }
  }, [user]);

  useEffect(() => {
    getUserFromServerAndUpdate();
  }, [getUserFromServerAndUpdate]);

  // fetch products
  const fetchProducts = async () => {
    setProducts(null);
    try {
      const products = await productsRepository.get({
        query: {
          title: search,
          categories: activeCategory,
        },
      });
      setProducts(products);
    } catch (e) {
      ErrorHandler.displayError(e);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [search, activeCategory]); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchCategories = async () => {
    setCategories(null);
    try {
      const categories = await categoriesRepository.get();
      setCategories(categories);
      // set first category as active
      setActiveCategory(categories.map((category) => category.id).join(","));
    } catch (e) {
      ErrorHandler.displayError(e);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, [search]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="flex flex-col gap-6 pt-12 h-[100svh]">
      {/* header */}
      <div className="flex flex-col gap-6 px-6">
        <Header />
        <div className="flex flex-col gap-2">
          <p className="text-normal">
            {t(Translation.hiX, {
              nickname: user.nickname,
            })}
          </p>
          <p className="text-2xl font-inter-bold">
            {t(Translation.whatAreYouLookingForToday)}
          </p>
        </div>
        {/* search box */}
        <SimpleTextInput
          id="home-search"
          name="search"
          placeholder="Search headphone"
          value={search}
          onChange={setSearch}
          maxLength={100}
          icon={<SearchIcon className="stroke-on-background w-5 h-5" />}
        />
        {/* categories tabs */}
        <TabWrapper>
          <TabButton
            id={categories?.map((category) => category.id).join(",") || ""}
            key={"all"}
            label={t(Translation.all)}
            active={activeCategory}
            onActiveChange={setActiveCategory}
          />
          {categories ? (
            categories.map((category) => (
              <TabButton
                id={category.id}
                key={category.key}
                label={category.title}
                active={activeCategory}
                onActiveChange={setActiveCategory}
              />
            ))
          ) : (
            <TabButtonSkeleton length={10} />
          )}
        </TabWrapper>
      </div>
      {/* products */}
      <ProductsWrapper products={products} />
    </div>
  );
}
