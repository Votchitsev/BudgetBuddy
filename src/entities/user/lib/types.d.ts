export interface ISignUpCredentials {
  name: string;
  password: string;
  confirmPassword: string;
}

export interface ISignInCredentials {
  name: string;
  password: string;
}

export interface IUser {
  id: number;
  name: string;
}

export type Token = string;
