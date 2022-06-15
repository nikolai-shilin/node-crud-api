import { UsersStore } from "../models/UsersStore.js";
import { User } from "../models/User.js";
// import { validate as uuidValidate } from "uuid";

const createUserController = async (req, res) => {
  const users = UsersStore.getInstance();
  let userData = req.body;

  try {
    const user = new User(userData);
    users.addUser(user);

    res.status(201).json(user);
  } catch (error) {
    res.status(400).send("User model is invalid");
  }
};

export { createUserController };
