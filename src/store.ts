import { create } from "zustand";
import { persist } from "zustand/middleware";

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
