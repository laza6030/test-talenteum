import { Request, Response } from "express";

import { pool } from "../database";
import { isEmailValid } from "../helpers";
import { User } from "../types";

export const saveUser = async (req: Request, res: Response) => {
  const user: User = req.body;

  try {
    if (!user.username.trim()) throw new Error("Username can not be empty");

    if (!isEmailValid(user.email))
      throw new Error("Please provide a valid email");

    if (user.age <= 0) throw new Error("Age should be a positive number");

    // Save the user to the database
    await pool.query(
      `
      INSERT INTO users (username, email, age) VALUES ($1, $2, $3);
    `,
      [user.username, user.email, user.age]
    );

    res.send("User saved successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send((error as Error).message);
  }
};
