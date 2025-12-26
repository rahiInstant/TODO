import { User } from "../../domain/entities/User";

export interface IUserRepo {
  create(user: User): Promise<void>;
  delete(user: User): Promise<void>;
  update(user: User): Promise<void>;
  login(user: User): Promise<void>;
  logout(user: User): Promise<void>;
}
