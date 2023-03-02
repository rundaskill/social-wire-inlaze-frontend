import { UserModel } from "../user/user.model";

export interface currentUserValueModel {
  access_token: string;
  user: UserModel;
}

