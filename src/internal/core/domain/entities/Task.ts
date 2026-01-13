export class Task {
  constructor(
    public readonly id: string,
    public title: string,
    public description: string,
    public completed: boolean = false,
    public userId: string,
    public createdAt: Date = new Date(),
    public updatedAt: Date = new Date()
  ) {}
}
