import { Task } from "./../../core/domain/entities/Task";
export class TaskPresenter {
  constructor() {}

  static toHTTP(task: Task) {
    return {
      id: task.id,
      title: task.title,
      description: task.description,
      completed: task.completed,
      userId: task.userId,
      createdAt: task.createdAt,
      updatedAt: task.updatedAt,
    };
  }
}
