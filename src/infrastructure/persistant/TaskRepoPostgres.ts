import { User } from "../../core/domain/entities/User";
import { IUserRepo } from "../../core/domain/repositories/IUserRepo";

export class TaskRepoPostgres implements IUserRepo {
    constructor(){}
    create(task: User): Promise<void> {
        
    }
    delete(user:User): Promise<void> {
        
    }
    update(user: User): Promise<void> {
        
    }
    login(user: User): Promise<void> {
        
    }
    logout(user: User): Promise<void> {
        
    }
}