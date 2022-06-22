import express from "express";
import users from "../controllers/users/index.js";

const userRoter = express.Router();

userRoter
  .post("/", users.createUserController)
  .get("/", users.getAllUsersController)
  .get("/:userId", users.getUserByIdController)
  .put("/:userId", users.updateUserByIdController)
  .delete("/:userId", users.deleteUserByIdController);

export { userRoter };
