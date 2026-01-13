export interface IPremiumUserTaskRepo {
  update(id: string, title: string, description: string): Promise<void>;
}
