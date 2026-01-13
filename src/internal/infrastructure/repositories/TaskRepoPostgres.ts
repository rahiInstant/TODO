import { IPremiumUserTaskRepo } from "../../core/usecase/interfaces/IPremiumUserTaskRepo";
import { ITaskRepo } from "../../core/usecase/interfaces/ITaskRepo";

export class TaskRepoPostgres implements ITaskRepo {
  constructor() {}
  save(task: Task): Promise<void> {}
  findAllByUser(userId: string): Promise<Task[]> {}
  findById(id: string): Promise<Task | null> {}
  delete(id: string): Promise<void> {}
  markComplete(id: string, completed: boolean): Promise<void> {}
}
