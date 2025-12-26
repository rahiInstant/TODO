import { TaskRepoPostgres } from "./infrastructure/persistant/TaskRepoPostgres";
import { TaskRepoMongo } from "./infrastructure/persistant/TaskRepoMongo";
import {
  createTask,
  listTask,
  updateTask,
  deleteTask,
} from "./interface/controller/task.controller";
import { EmailNotifier } from "./infrastructure/notification/EmailNotifier";
import { TaskService } from "./core/usecase/services/TaskServices";
import { UserServices } from "./core/usecase/services/UserServices";
import { Router } from "express";

export const taskService = new TaskService(
  new TaskRepoMongo(),
  new EmailNotifier()
);
export const userService = new UserServices(
  new TaskRepoPostgres(),
  new EmailNotifier()
);

const router = Router();

router.get("/tasks/:userId", createTask);
