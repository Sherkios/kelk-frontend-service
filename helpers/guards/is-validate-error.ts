import { isResponseError } from "helpers/guards/is-response-error";
import type { IValidateErrorResponse } from "types/response.types";

export function isValidateError<T>(value: any): value is IValidateErrorResponse<T> {
  return isResponseError(value) && "errors" in value;
}
