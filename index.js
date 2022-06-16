import express from "express";
import "dotenv/config";

import { getAllUsersController } from "./controllers/getAllUsersController.js";
import { getUserByIdController } from "./controllers/getUserByIdController.js";
import { createUserController } from "./controllers/createUserController.js";
import { deleteUserByIdController } from "./controllers/deleteUserByIdController.js";
import { updateUserByIdController } from "./controllers/updateUserByIdController.js";

import { notFoundController } from "./middleware/404.js";
import { internalServerErrorController } from "./middleware/500.js";

const app = new express();
app.use(express.json());

// USERS API CRUD
app.post("/api/users", createUserController);
app.get("/api/users", getAllUsersController);
app.get("/api/users/:userId", getUserByIdController);
app.put("/api/users/:userId", updateUserByIdController);
app.delete("/api/users/:userId", deleteUserByIdController);

// error handling - has to be last
app.use(internalServerErrorController);
app.use(notFoundController);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port:${PORT}`);
});
