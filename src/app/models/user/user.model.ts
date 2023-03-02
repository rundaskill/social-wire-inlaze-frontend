export interface UserModel {
  id?:number
  nickname: string;
  full_name: string;
  email: string;
  password?: string;
}