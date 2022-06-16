import express from "express";

import { getAllUsersController } from "../controllers/Users/getAllUsersController.js";
import { getUserByIdController } from "../controllers/Users/getUserByIdController.js";
import { createUserController } from "../controllers/Users/createUserController.js";
import { deleteUserByIdController } from "../controllers/Users/deleteUserByIdController.js";
import { updateUserByIdController } from "../controllers/Users/updateUserByIdController.js";

const userRoter = express.Router();

userRoter.post("", createUserController);
userRoter.get("", getAllUsersController);
userRoter.get("/:userId", getUserByIdController);
userRoter.put("/:userId", updateUserByIdController);
userRoter.delete("/:userId", deleteUserByIdController);

export { userRoter };