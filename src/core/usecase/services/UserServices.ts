import { INotification } from "../interfaces/INotification";
import { IUserRepo } from "./../../domain/repositories/IUserRepo";
import { User } from "../../domain/entities/User";

export class UserServices {
  constructor(
    private readonly userRepo: IUserRepo,
    private readonly notifier: INotification
  ) {}

  createUser() {

  }

  updateUser() {

  }

  deleteUser() {

  }

  login() {

  }

  logout() {
    
  }
}
