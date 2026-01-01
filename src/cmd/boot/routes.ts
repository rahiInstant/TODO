import {
  createTask,
  listTask,
  updateTask,
  deleteTask,
} from "../../adapter/controller/task.controller";
import { Router } from "express";

const router = Router();

router.get("/tasks/:userId", createTask);
router.get("/task", listTask);
router.put("/task/:taskId", updateTask);
router.delete("/task/:taskId", deleteTask);

export { router as routes };
