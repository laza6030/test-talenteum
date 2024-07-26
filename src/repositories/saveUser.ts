import { Request, Response } from "express";

import { isEmailValid } from "../helpers";
import { User } from "../types";

export const saveUser = (req: Request, res: Response) => {
  const user: User = req.body;

  if (!user.username.trim()) throw new Error("Username can not be empty");

  if (!isEmailValid(user.email))
    throw new Error("Please provide a valid email");

  if (user.age < 0) throw new Error("Age can not be negative");

  res.send("User saved successfully");
};
