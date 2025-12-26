import { Request, Response } from "express";
export const createTask = async (req: Request, res: Response) => {
  res.status(201).json({ message: "task created" });
};

export const listTask = async (req: Request, res: Response) => {};

export const updateTask = async (req: Request, res: Response) => {};

export const deleteTask = async (req: Request, res: Response) => {};
