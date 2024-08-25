import { useThemeStore } from "./store";

export default function App() {
  const themeStore = useThemeStore();

  return <div data-theme={themeStore.mode}></div>;
}
