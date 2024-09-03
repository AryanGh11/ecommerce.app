import { useState } from "react";
import { MenuIcon } from "src/assets/icons";
import { NameWithLogo } from "../name-with-logo";
import { NavigationBar } from "../navigation-bar";

export default function Header() {
  const [openNav, setOpenNav] = useState<boolean>(false);

  return (
    <header className="w-full flex justify-between items-center">
      {/* menu icon */}
      <button onClick={() => setOpenNav(true)}>
        <MenuIcon className="stroke-foreground w-5 h-5" />
      </button>
      {/* name & logo */}
      <NameWithLogo />
      {/* profile image */}
      <div className="w-9 h-9 bg-on-background2 rounded-full" />

      {/* navigation bar */}
      <NavigationBar open={openNav} onOpenChanged={setOpenNav} />
    </header>
  );
}
