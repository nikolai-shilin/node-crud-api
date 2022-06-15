import express from "express";
import "dotenv/config";

import { getAllUsersController } from './controllers/getAllUsersController.js';
import { getUserByIdController } from "./controllers/getUserByIdController.js";
import { createUserController } from "./controllers/createUserController.js";
import { deleteUserByIdController } from "./controllers/deleteUserByIdController.js";
import { updateUserByIdController } from "./controllers/updateUserByIdController.js";


const app = new express();
app.use(express.json());

// USERS API CRUD
app.post("/api/users", createUserController);
app.get("/api/users", getAllUsersController);
app.get("/api/users/:userId", getUserByIdController);
app.put("/api/users/:userId", updateUserByIdController);
app.delete("/api/users/:userId", deleteUserByIdController);

//500
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

//404
app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port:${PORT}`);
});
