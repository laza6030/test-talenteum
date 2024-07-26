import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import { saveUser } from "./repositories";

dotenv.config();

// Create a new express application instance
const app: Express = express();
const port = process.env.PORT || 3000;
const jsonParser = bodyParser.json();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(jsonParser);

app.get("/", (_: Request, res: Response) => {
  res.send({ Status: "Server is running" });
});

app.post("/save-user", saveUser);

// Start the server
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
