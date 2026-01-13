import {
  createTask,
  listTask,
  updateTask,
  deleteTask,
} from "../../internal/adapter/controller/task.controller";
import { Router } from "express";

const router = Router();

router.post("/tasks/:userId", createTask);
router.get("/task", listTask);
router.put("/task/:taskId", updateTask);
router.delete("/task/:taskId", deleteTask);

export { router as routes };
