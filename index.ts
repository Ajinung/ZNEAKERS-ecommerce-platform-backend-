import express, { Application } from "express";
import { appConfig } from "./app";
import { dbConfig } from "./config/db";

const app: Application = express();
const port: number = 9999;

//middlewares
dbConfig();
appConfig(app);

app.listen(port, () => {
  console.log(`server listening on ${port}`);
});
