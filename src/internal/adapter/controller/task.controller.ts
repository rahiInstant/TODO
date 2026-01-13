import { TaskPresenter } from "../presenter/task.presenter";
import { taskService } from "../../../cmd/boot/app";
import { Request, Response } from "express";

export const createTask = async (req: Request, res: Response) => {
  const task = await taskService.createTask(req.body);
  res.status(201).json({ message: TaskPresenter.toHTTP(task) });
};

export const listTask = async (req: Request, res: Response) => {
  const tasks = await taskService.listTasks(req.params.userId);
  res.json(tasks.map(TaskPresenter.toHTTP));
};

export const updateTask = async (req: Request, res: Response) => {
  const task = await taskService.updateTask(
    req.params.id,
    req.body.title,
    req.body.description
  );
  if (!task) return res.status(404).json({ message: "Task not found" });
  res.json(TaskPresenter.toHTTP(task));
};

export const deleteTask = async (req: Request, res: Response) => {
  const deleted = await taskService.deleteTask(req.params.id);
  if (!deleted) return res.status(404).json({ message: "Task not found" });
  res.status(204).send({ message: "task deleted." });
};


