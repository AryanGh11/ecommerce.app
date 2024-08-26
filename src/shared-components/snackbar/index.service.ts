import { SnackbarProps, SnackbarTypes } from "./index.interfaces";

export class SnackbarService {
  private static instance: SnackbarService | null = null;
  private showSnackbarCallback: ((snackbar: SnackbarProps) => void) | null =
    null;

  private constructor() {}

  public static getInstance(): SnackbarService {
    if (!SnackbarService.instance) {
      SnackbarService.instance = new SnackbarService();
    }
    return SnackbarService.instance;
  }

  public setShowSnackbarCallback(
    callback: (snackbar: SnackbarProps) => void
  ): void {
    this.showSnackbarCallback = callback;
  }

  private showMessage({ message, type, permanent }: SnackbarProps): void {
    if (this.showSnackbarCallback) {
      this.showSnackbarCallback({ message, type, permanent });
    }
  }

  public static showSuccessMessage(
    message: string | null,
    permanent?: boolean
  ): void {
    SnackbarService.getInstance().showMessage({
      message,
      type: SnackbarTypes.success,
      permanent,
    });
  }

  public static showErrorMessage(
    message: string | null,
    permanent?: boolean
  ): void {
    SnackbarService.getInstance().showMessage({
      message,
      type: SnackbarTypes.error,
      permanent,
    });
  }

  public clear(): void {
    SnackbarService.showSuccessMessage("");
    SnackbarService.instance = null;
    this.showSnackbarCallback = null;
  }
}
