import { Task } from "../../domain/entities/Task";

export interface ITaskRepo {
  save(task: Task): Promise<void>;
  findAllByUser(userId: string): Promise<Task[]>;
  findById(id: string): Promise<Task | null>;
  delete(id: string): Promise<void>;
  update(id: string, title: string, description: string): Promise<void>;
  markComplete(id: string, completed: boolean): Promise<void>;
}
