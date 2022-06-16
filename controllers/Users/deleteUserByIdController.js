import { UsersStore } from "../../models/UsersStore.js";
import { validate as uuidValidate } from "uuid";

const deleteUserByIdController = async (req, res) => {
  const users = UsersStore.getInstance();
  const userId = req.params.userId;

  if (!uuidValidate(userId)) {
    res.status(400).end();
  }

  try {
    users.deleteUser(userId);
    res.status(204).end();
  } catch (error) {
    res.status(404).end();
  }
};

export { deleteUserByIdController };
