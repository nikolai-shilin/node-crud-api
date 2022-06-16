import { UsersStore } from "../models/UsersStore.js";
import { validate as uuidValidate } from "uuid";

const updateUserByIdController = async (req, res) => {
  const users = UsersStore.getInstance();
  const userId = req.params.userId;
  let newUserData = req.body;

  if (!uuidValidate(userId)) {
    res.status(400).end();
  }

  try {
    users.updateUser(userId, newUserData);
    res.status(204).end();
  } catch (error) {
    res.status(404).end();
  }
};

export { updateUserByIdController };
