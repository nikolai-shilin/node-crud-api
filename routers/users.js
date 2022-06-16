import express from "express";

import { getAllUsersController } from "../controllers/users/getAllUsersController.js";
import { getUserByIdController } from "../controllers/users/getUserByIdController.js";
import { createUserController } from "../controllers/users/createUserController.js";
import { deleteUserByIdController } from "../controllers/users/deleteUserByIdController.js";
import { updateUserByIdController } from "../controllers/users/updateUserByIdController.js";

const userRoter = express.Router();

userRoter.post("/", createUserController);
userRoter.get("/", getAllUsersController);
userRoter.get("/:userId", getUserByIdController);
userRoter.put("/:userId", updateUserByIdController);
userRoter.delete("/:userId", deleteUserByIdController);

export { userRoter };