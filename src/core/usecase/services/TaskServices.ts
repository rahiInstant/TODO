import { ITaskRepo } from "../../domain/repositories/ITaskRepo";
import { INotification } from "../interfaces/INotification";
import { Task } from "../../domain/entities/Task";

export class TaskService {
  constructor(
    private readonly taskRepo: ITaskRepo,
    private readonly notifer: INotification
  ) {}

  async createTask(taskData: {
    id: string;
    title: string;
    description: string;
    userId: string;
  }): Promise<Task> {
    const task = new Task(
      taskData.id,
      taskData.title,
      taskData.description,
      false,
      taskData.userId
    );
    await this.taskRepo.save(task);
    await this.notifer.notify(task, "task created");
    return task;
  }
  async listTasks(userId: string): Promise<Task[]> {
    return this.taskRepo.findAllByUser(userId);
  }
  async updateTask(
    id: string,
    title: string,
    description: string
  ): Promise<Task | null> {
    const task = await this.taskRepo.findById(id);
    if (!task) return null;
    this.taskRepo.update(id, title, description);
    await this.taskRepo.save(task);
    await this.notifer.notify(task, "task updated");
    return task;
  }
  async deleteTask(id: string): Promise<boolean> {
    const task = await this.taskRepo.findById(id);
    if (!task) return false;
    await this.taskRepo.delete(id);
    await this.notifer.notify(task, "task deleted");
    return true;
  }
}
