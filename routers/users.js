import express from "express";

import { getAllUsersController } from "../controllers/Users/getAllUsersController.js";
import { getUserByIdController } from "../controllers/Users/getUserByIdController.js";
import { createUserController } from "../controllers/Users/createUserController.js";
import { deleteUserByIdController } from "../controllers/Users/deleteUserByIdController.js";
import { updateUserByIdController } from "../controllers/Users/updateUserByIdController.js";

const userRoter = express.Router();

userRoter.post("/api/users", createUserController);
userRoter.get("/api/users", getAllUsersController);
userRoter.get("/api/users/:userId", getUserByIdController);
userRoter.put("/api/users/:userId", updateUserByIdController);
userRoter.delete("/api/users/:userId", deleteUserByIdController);

export { userRoter };