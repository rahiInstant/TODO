import { Task } from "../../domain/entities/Task";

export interface INotification {
  notify(task: Task, message: string): Promise<void>;
}