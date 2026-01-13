import { TaskService } from "../src/internal/core/usecase/services/TaskServices";
import { Task } from "../src/internal/core/domain/entities/Task";

describe("TaskService", () => {
  let repo: any;
  let notifier: any;
  let service: TaskService;

  beforeEach(() => {
    repo = {
      save: jest.fn().mockResolvedValue(undefined),
      findAllByUser: jest.fn().mockResolvedValue([]),
      findById: jest.fn(),
      delete: jest.fn().mockResolvedValue(undefined),
    };
    notifier = {
      notify: jest.fn().mockResolvedValue(undefined),
    };
    service = new TaskService(repo, notifier);
  });

  test("createTask saves and notifies", async () => {
    const data = { id: "1", title: "T", description: "D", userId: "u1" };
    const result = await service.createTask(data);
    expect(repo.save).toHaveBeenCalled();
    expect(notifier.notify).toHaveBeenCalledWith(
      expect.any(Task),
      "task created"
    );
    expect(result.id).toBe(data.id);
    expect(result.title).toBe(data.title);
    expect(result.description).toBe(data.description);
    expect(result.userId).toBe(data.userId);
    expect(result.completed).toBe(false);
  });

  test("listTasks returns tasks from repo", async () => {
    const tasks = [new Task("1", "a", "b", false, "u1")];
    repo.findAllByUser.mockResolvedValue(tasks);
    const res = await service.listTasks("u1");
    expect(res).toBe(tasks);
    expect(repo.findAllByUser).toHaveBeenCalledWith("u1");
  });

  test("updateTask returns null when not found", async () => {
    repo.findById.mockResolvedValue(null);
    const res = await service.updateTask("x", "t", "d");
    expect(res).toBeNull();
    expect(repo.save).not.toHaveBeenCalled();
    expect(notifier.notify).not.toHaveBeenCalled();
  });

  test("updateTask updates and notifies when found", async () => {
    const existing = new Task("1", "old", "olddesc", false, "u1");
    const oldUpdatedAt = existing.updatedAt;
    repo.findById.mockResolvedValue(existing);
    const res = await service.updateTask("1", "new", "newdesc");
    expect(res).not.toBeNull();
    expect(res!.title).toBe("new");
    expect(res!.description).toBe("newdesc");
    // expect(res!.updatedAt.getTime()).toBeGreaterThan(oldUpdatedAt.getTime());
    expect(repo.save).toHaveBeenCalledWith(existing);
    expect(notifier.notify).toHaveBeenCalledWith(existing, "task updated");
  });

  test("deleteTask returns false when not found", async () => {
    repo.findById.mockResolvedValue(null);
    const res = await service.deleteTask("x");
    expect(res).toBe(false);
    expect(repo.delete).not.toHaveBeenCalled();
    expect(notifier.notify).not.toHaveBeenCalled();
  });

  test("deleteTask deletes and notifies when found", async () => {
    const existing = new Task("1", "t", "d", false, "u1");
    repo.findById.mockResolvedValue(existing);
    const res = await service.deleteTask("1");
    expect(res).toBe(true);
    expect(repo.delete).toHaveBeenCalledWith("1");
    expect(notifier.notify).toHaveBeenCalledWith(existing, "task deleted");
  });
});
