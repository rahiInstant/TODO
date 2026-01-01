import { taskDBFactory } from "../../infrastructure/factories/taskDbFactory";
import { TaskService } from "../../core/usecase/services/TaskServices";
import { NotificationFactory } from "../../infrastructure/factories/notificationFactory";

const taskDB = taskDBFactory.createDB(process.env.DB_TASK);
const notifier = NotificationFactory.createNotifier(process.env.NOTIFICATION);
export const taskService = new TaskService(taskDB, notifier);
