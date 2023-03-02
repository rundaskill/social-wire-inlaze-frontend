import { UserModel } from "../user/user.model";

export interface CurrentUserValueModel {
  access_token: string;
  user: UserModel;
}

