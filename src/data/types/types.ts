import { User } from "../../components/registration/types/type";

export type LoginRequest = {
  email: string;
  password: string;
};

export type profileRequest = {
  userEmail: string;
  movie: string;
  serie: string;
  anime: string;
};

export type CardRequest = {
  title: string;
  description: string;
  avaliation: number;
  image: string;
};

export type CardDataRequest = {
  id?: string;
  title: string;
  description: string;
  avaliation: number;
  image: string;
};

export type UserRequest = {
  name: string;
  cpf: string;
  email: string;
  idade: number;
  role: string;
  password: string;
  confirmPassword: string;
};
