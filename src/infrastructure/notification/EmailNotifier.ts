import { Task } from "../../core/domain/entities/Task";
import { INotification } from "../../core/usecase/interfaces/INotification";

export class EmailNotifier implements INotification {
    constructor(){}
    notify(task: Task, message: string): Promise<void> {
        
    }
}