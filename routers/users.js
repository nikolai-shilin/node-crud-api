import express from "express";

import {
  getAllUsersController,
  getUserByIdController,
  createUserController,
  deleteUserByIdController,
  updateUserByIdController,
} from "../controllers/users/index.js";

const userRoter = express.Router();

userRoter.post("/", createUserController);
userRoter.get("/", getAllUsersController);
userRoter.get("/:userId", getUserByIdController);
userRoter.put("/:userId", updateUserByIdController);
userRoter.delete("/:userId", deleteUserByIdController);

export { userRoter };
