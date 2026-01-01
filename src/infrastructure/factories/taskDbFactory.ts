import { TaskRepoMongo } from "./../persistant/TaskRepoMongo";
import { TaskRepoPostgres } from "../persistant/TaskRepoPostgres";
import { ITaskRepo } from "../../core/usecase/interfaces/ITaskRepo";

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
