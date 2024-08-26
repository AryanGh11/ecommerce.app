import { AxiosError } from "axios";
import { AppError } from "./appError";
import { SnackbarService } from "../shared-components/snackbar";

export class ErrorHandler {
  /**
   * @description this method will display the error to snackbar
   * @param error
   * @param permanent
   * @returns string error message
   */
  public static displayError(error: unknown): string {
    const errorMessage = ErrorHandler.getErrorMessages(error);
    SnackbarService.showErrorMessage(errorMessage);
    return errorMessage;
  }

  /**
   * @description this method will get the error unknown message and handle it
   * @param error
   * @returns string error message
   */
  public static getErrorMessages(error: unknown): string {
    if (error instanceof AppError) {
      return error.message;
    } else if (error instanceof AxiosError) {
      return error.message;
    } else {
      console.log(error);
      return "Something went wrong!";
    }
  }
}
