import { UsersStore } from "../models/UsersStore.js"

const getAllUsersController = async (req, res) => {
  const users = UsersStore.getInstance();
  res.status(200).send(users.getAll());
};

export { getAllUsersController };
