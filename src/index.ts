import express, { NextFunction, Request, Response } from "express";

import AppError from "./errors/AppError";
import { usersRoutes } from "./routes/users.routes";

const app = express();

app.use(express.json());

app.use("/users", usersRoutes);
app.use(
  (error: Error, request: Request, response: Response, _next: NextFunction) => {
    if (error instanceof AppError) {
      return response.status(error.code).json({ error: error.message });
    }
    return response.status(500).json({ error: "internal_server_error" });
  }
);
export { app };
