import { create } from "zustand";
import { User } from "./components/user";
import { persist } from "zustand/middleware";
import { GenericNullable } from "./types/GenericNullable";

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

type UserState = GenericNullable<User> & {
  setUser: (user: User) => void;
  clearUser: () => void;
};

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      id: null,
      nickname: null,
      username: null,
      email: null,
      authToken: null,
      isEmailVerified: null,
      createdAt: null,
      updatedAt: null,
      setUser: (user) =>
        set(() => ({
          id: user.id,
          nickname: user.nickname,
          username: user.username,
          email: user.email,
          authToken: user.authToken,
          isEmailVerified: user.isEmailVerified,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        })),
      clearUser: () =>
        set(() => ({
          id: null,
          nickname: null,
          username: null,
          email: null,
          authToken: null,
          isEmailVerified: null,
          createdAt: null,
          updatedAt: null,
        })),
    }),
    { name: "user-store" }
  )
);
