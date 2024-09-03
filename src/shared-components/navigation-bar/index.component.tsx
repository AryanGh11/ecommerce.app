import Translation from "src/translations/locales/translation";

import { User } from "src/components/user";
import { useTranslation } from "react-i18next";
import { NameWithLogo } from "../name-with-logo";
import { NavigationBarProps } from "./index.interface";
import { AnimatePresence, motion } from "framer-motion";
import { SimpleTextButton } from "../form/fields/buttons/simple-text-button";

export default function NavigationBar({
  open,
  onOpenChanged,
}: NavigationBarProps) {
  const { t } = useTranslation();

  const user = User.getInstance();

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* background overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={() => onOpenChanged(false)}
            className="fixed top-0 left-0 w-full bg-black bg-opacity-70 backdrop-blur-xs h-[100svh] z-10"
          />
          {/* navigation bar */}
          <motion.nav
            initial={{ translateX: "-100%" }}
            animate={{ translateX: "0" }}
            exit={{ translateX: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-2/3 bg-background h-[100svh] z-10 py-16 px-8 flex flex-col items-center gap-8 justify-between"
          >
            {/* logo & name */}
            <NameWithLogo />
            {/* unordered list */}
            <ul className="flex flex-col">
              <li>More content soon</li>
            </ul>
            {/* sign out button */}
            <SimpleTextButton
              id="navigation-bar-signOut"
              text={t(Translation.signOut)}
              onClick={() => {
                user.signOut();
                window.location.reload();
              }}
              disabled={false}
            />
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
