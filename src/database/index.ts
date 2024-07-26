import { Pool } from "pg";

import config from "../config";

// Create a new pool
export const pool = new Pool({
  user: config.DB_USER,
  host: config.DB_HOST,
  database: config.DB_NAME,
  password: config.DB_PASSWORD,
  port: config.DB_PORT,
});

export const initDatabase = async () => {
  try {
    const client = await pool.connect();

    // Create the users table
    await client.query(`
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        age INT NOT NULL
      );
    `);
    console.log("[Server]: Database setup successfully...");
  } catch (error) {
    console.error("Error setting up the database", error);
  }
};
