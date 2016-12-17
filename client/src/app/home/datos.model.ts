export interface UserModel {
  id: number;
  firstName: string;
  lastName: string;
  createAt: Date;
}

export class User implements UserModel {
  constructor(
    public id: number,
    public firstName: string,
    public lastName: string,
    public createAt: Date) { }
}