import express, { Request, Response } from "express";

import dotenv from "dotenv";
import path from "path";
import config from "./config";
import initDB, { pool } from "./config/db";
import logger from "./middleware/logger";
import { userRoutes } from "./modules/user/user.routes";
import { todoRoutes } from "./modules/todo/todo.routes";
import { authRoutes } from "./modules/auth/auth.routes";

dotenv.config({ path: path.join(process.cwd(), ".env") });

const app = express();

// const port = 5000;

// parser
app.use(express.json());

initDB();

app.get("/", logger, (req, res) => {
  res.send("Hello World!");
});


//?users CRUD
app.use("/users", userRoutes);

//todos CRUD
app.use("/todos", todoRoutes);

//!Auth routes
app.use("/auth", authRoutes);


 

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
    path: req.path,
  });
});

export default app;