import { Request, Response } from "express";

import { pool } from "../database";
import { isEmailValid } from "../helpers";
import { User } from "../types";

export const saveUser = async (req: Request, res: Response) => {
  const user: User = req.body;

  if (!user.username.trim()) throw new Error("Username can not be empty");

  if (!isEmailValid(user.email))
    throw new Error("Please provide a valid email");

  if (user.age < 0) throw new Error("Age can not be negative");

  try {
    // Save the user to the database
    await pool.query(
      `
      INSERT INTO users (username, email, age) VALUES ($1, $2, $3);
    `,
      [user.username, user.email, user.age]
    );
  } catch (error) {
    console.error("Error saving user", error);
    throw new Error("Error saving user");
  }

  res.send("User saved successfully");
};
