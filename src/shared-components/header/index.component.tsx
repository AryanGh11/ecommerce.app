import { MenuIcon } from "src/assets/icons";
import { NameWithLogo } from "../name-with-logo";

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center">
      <MenuIcon className="stroke-foreground w-5 h-5" />
      <NameWithLogo />
      {/* profile image */}
      <div className="w-9 h-9 bg-on-background2 rounded-full" />
    </header>
  );
}
