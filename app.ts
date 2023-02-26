import express, { Application } from "express";
import cors from "cors";
import userRouter from "./router/router";
import productRoute from "./router/product.route";

const app = express();

export const appConfig = async (app: Application) => {
  app
    .use(express.json())
    .use(cors())

    //router
    .use("/api", userRouter)
    .use("/api", productRoute);
};
