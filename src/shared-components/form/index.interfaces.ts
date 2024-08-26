import { ReactNode } from "react";

export interface FormProps {
  children: ReactNode;
  onSubmit: (() => Promise<void>) | (() => void);
  className?: string;
}

export interface FormState {}
