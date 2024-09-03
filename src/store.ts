import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ProductSummary } from "./components/product";

type ThemeState = {
  mode: "light" | "dark";
  toggleMode: (theme: "light" | "dark") => void;
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      mode: "light",
      toggleMode: (theme) => set(() => ({ mode: theme })),
    }),
    { name: "theme-store" }
  )
);

interface CartStoreState {
  cart: ProductSummary[];
  addToCart: (item: ProductSummary) => void;
  removeFromCart: (item: ProductSummary) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartStoreState>()(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (item: ProductSummary) => {
        const state = get();
        if (!state.cart.find((product) => product.id === item.id)) {
          set({ cart: [...state.cart, item] });
        }
      },
      removeFromCart: (item: ProductSummary) =>
        set((state) => ({
          cart: state.cart.filter((product) => product.id !== item.id),
        })),
      clearCart: () => set(() => ({ cart: [] })),
    }),
    {
      name: "cart-store",
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.cart = state.cart.map((item) => ProductSummary.fromJson(item));
        }
      },
    }
  )
);
