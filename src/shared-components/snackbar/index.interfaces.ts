export enum SnackbarTypes {
  success = "success",
  error = "error",
}

export interface SnackbarProps {
  message: string | null;
  type: SnackbarTypes;
  permanent?: boolean;
}
