import type { KeysOf } from "types/utils.types";

export interface IResponse {}

export interface IErrorResponse {
  message: string;
  error: string;
  statusCode: number;
}
export interface IValidateErrorResponse<T = Record<string, string>> extends IErrorResponse {
  errors: {
    errorsKey: KeysOf<T>;
    value: T;
  };
}
