import { ITaskRepo } from "../../core/usecase/interfaces/ITaskRepo";
import { TaskRepoMongo } from "../repositories/TaskRepoMongo";
import { TaskRepoPostgres } from "../repositories/TaskRepoPostgres";

export class taskDBFactory {
 static createDB(dbName: "postgres" | "mongo" | string | undefined): ITaskRepo {
    switch ((dbName || "").toLowerCase()) {
      case "postgres":
        return new TaskRepoPostgres();
      case "mongo":
        return new TaskRepoMongo();
      default:
        return new TaskRepoMongo();
    }
  }
}
