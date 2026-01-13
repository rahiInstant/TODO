import { ITaskRepo } from '../../core/usecase/interfaces/ITaskRepo';
import { Task } from "../../core/domain/entities/Task";
import { IPremiumUserTaskRepo } from '../../core/usecase/interfaces/IPremiumUserTaskRepo';

export class TaskRepoMongo implements ITaskRepo, IPremiumUserTaskRepo {
  constructor() {}
  save(task: Task): Promise<void> {
    
  }
  findAllByUser(userId: string): Promise<Task[]> {}
  findById(id: string): Promise<Task | null> {}
  delete(id: string): Promise<void> {}
  update(id: string, title: string, description: string): Promise<void> {}
  markComplete(id: string, completed: boolean): Promise<void> {}
}
