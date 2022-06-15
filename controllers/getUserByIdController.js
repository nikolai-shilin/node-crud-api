import { UsersStore } from "../models/UsersStore.js";
import { validate as uuidValidate } from "uuid";


const getUserByIdController = async (req, res) => {
  const users = UsersStore.getInstance();
  const userId = req.params.userId;

  if (!uuidValidate(userId)) {
    res.status(400).end();
  }

  const user = users.getUserByKey(userId);
  if (user) {
    res.status(200).send(user);
  } else {
    res.status(404).end();
  }
};

export { getUserByIdController };
