import type { IErrorResponse } from "types/response.types";

export function isResponseError(value: any): value is IErrorResponse {
  return "message" in value && "error" in value && "statusCode" in value;
}
