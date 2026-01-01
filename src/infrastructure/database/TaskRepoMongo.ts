import { ITaskRepo } from './../../core/usecase/interfaces/ITaskRepo';
import { Task } from "../../core/domain/entities/Task";

export class TaskRepoMongo implements ITaskRepo {
  constructor() {}
  save(task: Task): Promise<void> {}
  findAllByUser(userId: string): Promise<Task[]> {}
  findById(id: string): Promise<Task | null> {}
  delete(id: string): Promise<void> {}
  update(id: string, title: string, description: string): Promise<void> {}
  markComplete(id: string, completed: boolean): Promise<void> {}
}
