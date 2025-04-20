export interface IRegister {
  login: string;
  email: string;
  password: string;
  name: string;
  lastName: string;
}

export type TUserRole = "USER" | "ADMIN";

export interface IRegisterUser {
  id: number;
  login: string;
  name: string;
  lastName: string;
  email: string;
  role: TUserRole;
}
