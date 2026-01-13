import { NotificationFactory } from './../../internal/infrastructure/factories/notificationFactory';
import { TaskService } from './../../internal/core/usecase/services/TaskServices';
import { taskDBFactory } from './../../internal/infrastructure/factories/taskDbFactory';

const taskDB = taskDBFactory.createDB(process.env.DB_TASK);
const notifier = NotificationFactory.createNotifier(process.env.NOTIFICATION);
export const taskService = new TaskService(taskDB, notifier);
