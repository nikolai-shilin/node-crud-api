import express from "express";
import { v4 as uuidv4, validate as uuidValidate } from "uuid";
import "dotenv/config";

import { readFileSync } from "fs";

const app = new express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

const users = JSON.parse(readFileSync("./users.json"));

const getAllUsers = async (req, res) => {
  res.status(200).send(users);
};

const getUserFromUsersById = (userId) =>
  users.filter((user) => user.id === userId)[0];

const getUserIndexFromUsersById = (userId) =>
  users.findIndex((user) => user.id === userId)[0];

const getUserById = async (req, res) => {
  const userId = req.params.userId;

  if (!uuidValidate(userId)) {
    res.status(400).end();
  }

  const user = getUserFromUsersById(userId);
  if (user) {
    res.status(200).send(user);
  } else {
    res.status(404).end();
  }
};

const userDataIsValid = (user) =>
  "username" in user && "age" in user && "hobbies" in user;

const createUser = (req, res) => {
  let userData = req.body;

  if (userDataIsValid(userData)) {
    const user = Object.assign({}, userData, { id: uuidv4() });
    users.push(user);
    res.status(201).json(user);
  } else {
    res.status(400).send("User model is invalid");
  }
};

const updateUserById = (req, res) => {
  const userId = req.params.userId;
  if (!uuidValidate(userId)) {
    res.status(400).end();
  }
  const userIndex = getUserIndexFromUsersById(userId);
  if (userIndex !== -1) {
    Object.assign(users[userIndex], userData);
    res.status(204).end();
  } else {
    res.status(404).end();
  }
};

const deleteUserById = (req, res) => {
  const userId = req.params.userId;

  if (!uuidValidate(userId)) {
    res.status(400).end();
  }
  const userIndex = getUserIndexFromUsersById(userId);
  if (userIndex !== -1) {
    users.splice(index, 1);
    res.status(204).end();
  } else {
    res.status(404).end();
  }
};

// CRUD
app.post("/api/users", createUser);
app.get("/api/users", getAllUsers);
app.get("/api/users/:userId", getUserById);
app.put("/api/users/:userId", updateUserById);
app.delete("/api/users/:userId", deleteUserById);

//500
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

//404
app.use((req, res, next) => {
  res.status(404).send("Sorry can't find that!");
});

app.listen(PORT, () => {
  console.log(`Server listening on port:${PORT}`);
});
