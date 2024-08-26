import { AppError } from "src/abstracts/appError";

export class FaildToParseResponse extends AppError {
  constructor(message?: string) {
    super(message || "Failed to parse response");
    Object.setPrototypeOf(this, FaildToParseResponse.prototype);
  }
  serializeErrors() {
    return [{ message: this.message }];
  }
}

export class ApiError extends AppError {
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, ApiError.prototype);
  }
  serializeErrors() {
    return [{ message: this.message }];
  }
}
