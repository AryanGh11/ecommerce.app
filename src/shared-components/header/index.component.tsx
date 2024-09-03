import { useCartStore } from "src/store";
import { MenuIcon } from "src/assets/icons";
import { NameWithLogo } from "../name-with-logo";

export default function Header() {
  const cartStore = useCartStore();

  return (
    <header className="w-full flex justify-between">
      <MenuIcon className="stroke-foreground w-5 h-5" />
      <NameWithLogo />
      {/* cart */}
      <p>{cartStore.cart.length}</p>
      {/* profile image */}
      <div className="w-9 h-9 bg-on-background2 rounded-full" />
    </header>
  );
}
