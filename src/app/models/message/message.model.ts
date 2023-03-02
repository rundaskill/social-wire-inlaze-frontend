import { UserModel } from "../user/user.model";

export interface ListMessageModel {
  id: number;
  title: string;
  message: string;
  creado_at: string;
  updated_at: string;
  user: UserModel;
}

export interface FilterListMessageModel{
    title?: string;
    creado_at?: string;
}
export interface CreateMessageModel{
  title: string;
  message: string;
}