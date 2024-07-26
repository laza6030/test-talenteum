import { Pool } from "pg";

import config from "../config";

// Create a new pool
export const pool = new Pool({
  user: config.user,
  host: config.host,
  database: config.database,
  password: config.password,
  port: config.postgresPort,
});

export const initDatabase = async () => {
  const client = await pool.connect();

  try {
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
