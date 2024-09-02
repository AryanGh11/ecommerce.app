import { MenuCloseIcon } from "src/assets/icons";
import { SnackbarService } from "./index.service";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SnackbarProps, SnackbarTypes } from "./index.interfaces";

export default function Snackbar({ message, type, permanent }: SnackbarProps) {
  const prevMessageRef = useRef(message);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    handleShowMessage();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const prevMessage = prevMessageRef.current;

    if (prevMessage !== message) {
      handleShowMessage();
    }

    // Update the ref after the effect logic
    prevMessageRef.current = message;
  });

  const handleShowMessage = (): void => {
    if (message) {
      setIsVisible(true);

      if (!permanent) {
        setTimeout(() => {
          setIsVisible(false);
          SnackbarService.getInstance().clear();
        }, 5000);
      }
    }
  };

  const handleHideSnackbar = () => {
    setIsVisible(false);
    SnackbarService.getInstance().clear();
  };

  return (
    <AnimatePresence>
      {isVisible && message && (
        <motion.div
          initial={{ top: "-100%" }}
          animate={{ top: 25 }}
          exit={{ top: "-100%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed top-0 left-0 flex justify-center items-start w-full h-screen z-[100]"
          style={{ pointerEvents: "none" }}
        >
          <motion.div
            className={`p-3 gap-2 w-[90%] max-w-[30rem] flex justify-between items-center rounded-md text-sm text-background ${
              type === SnackbarTypes.success ? "bg-on-background" : "bg-error"
            } `}
          >
            {/* message */}
            <h1>{message}</h1>
            {/* close button */}
            <button
              style={{ pointerEvents: "auto" }}
              onClick={handleHideSnackbar}
            >
              <MenuCloseIcon className="stroke-background" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
