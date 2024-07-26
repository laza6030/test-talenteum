import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import { saveUser } from "./repositories";
import { initDatabase } from "./database";
import config from "./config";

dotenv.config();

// Create a new express application instance
const app: Express = express();
const jsonParser = bodyParser.json();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(jsonParser);

app.get("/", (_: Request, res: Response) => {
  res.send({ Status: "Server is running" });
});

app.post("/save-user", saveUser);

// Initialize the database
initDatabase();

// Start the server
app.listen(config.serverPort, () => {
  console.log(
    `[server]: Server is running at http://localhost:${config.serverPort}`
  );
});
