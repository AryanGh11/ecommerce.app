import { Component, ReactNode } from "react";
import { SnackbarErrorIcon } from "src/assets/icons";
import { AnimatePresence, motion } from "framer-motion";

interface FormFieldErrorMessageProps {
  errorMessage: string | null;
}

export class FormFieldErrorMessage extends Component<FormFieldErrorMessageProps> {
  render(): ReactNode {
    const { errorMessage } = this.props;

    return (
      <AnimatePresence>
        {errorMessage && (
          <motion.div
            initial={{ y: -15, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -15, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center gap-1"
          >
            <SnackbarErrorIcon className="fill-error w-4 h-4" />
            <p className="text-sm text-error">{errorMessage}</p>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
}
