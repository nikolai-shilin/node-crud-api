import request from "supertest";
import { readFileSync } from "fs";
import { app } from "./app";

describe("getAllUsers", () => {
  const users = JSON.parse(readFileSync("./users.json"));

  describe("get all users", () => {
    it("should return a 200", async () => {
      const response = await request(app).get(`/api/users`);
      expect(response.status).toBe(200);
    });

    it("should respond with an array of users", async () => {
      const response = await request(app).get(`/api/users`);
      expect(response.body).toEqual(users);
    });
  });
});

describe("getUserById", () => {
  const users = JSON.parse(readFileSync("./users.json"));
  const user = users[0];
  const userId = user.id;
  const userIdBroken = "sdfvdfvdf";
  const userIdNonExistent = "1d72d5e4-c5c3-46a0-8fa5-0a5a0532dcf8";

  describe("get user by a correct id", () => {
    it("should return a 200", async () => {
      const response = await request(app).get(`/api/users/${userId}`);
      expect(response.status).toBe(200);
    });

    it("should respond with a user data", async () => {
      const response = await request(app).get(`/api/users/${userId}`);
      expect(response.body).toEqual(user);
    });
  });

  describe("get user by wrong id", () => {
    it("should return a 400", async () => {
      const response = await request(app).get(`/api/users/${userIdBroken}`);
      expect(response.status).toBe(400);
    });
  });

  describe("get user by non-existent id", () => {
    it("should return a 404", async () => {
      const response = await request(app).get(
        `/api/users/${userIdNonExistent}`
      );
      expect(response.status).toBe(404);
    });
  });
});

describe("createUser", () => {
  describe("create user with correct data", () => {
    const mockUserData = {
      username: "dubaca2",
      age: 12,
      hobbies: ["post stamps", "games"],
    };

    it("should return a 201", async () => {
      const response = await request(app).post(`/api/users`).send(mockUserData);
      expect(response.status).toBe(201);
    });

    it("should respond with a user object", async () => {
      const response = await request(app).post(`/api/users`).send(mockUserData);
      expect(response.body).toEqual(expect.objectContaining(mockUserData));
    });

    it("should respond an object with a defined id", async () => {
      const response = await request(app).post(`/api/users`).send(mockUserData);
      expect(response.body.id.length).toEqual(36);
      expect(typeof response.body.id).toEqual("string");
    });
  });

  describe("create user with broken data", () => {
    const mockBrokenUserData = {
      username: "dubaca2",
      hobbies: ["post stamps", "games"],
    };

    it("should return a 400", async () => {
      const response = await request(app)
        .post(`/api/users`)
        .send(mockBrokenUserData);
      expect(response.status).toBe(400);
    });
  });
});

describe("updateUserById", () => {
  const users = JSON.parse(readFileSync("./users.json"));
  const user = users[0];
  const userId = user.id;
  const userIdBroken = "sdfvdfvdf";
  const userIdNonExistent = "1d72d5e4-c5c3-46a0-8fa5-0a5a0532dcf8";
  const mockUserData = {
    username: "dubaca2",
    hobbies: ["post stamps", "games"],
  };

  describe("update user with a correct id", () => {
    it("should return a 204", async () => {
      const response = await request(app)
        .put(`/api/users/${userId}`)
        .send(mockUserData);
      expect(response.status).toBe(204);
    });
  });

  describe("update user with wrong id", () => {
    it("should return a 400", async () => {
      const response = await request(app)
        .put(`/api/users/${userIdBroken}`)
        .send(mockUserData);
      expect(response.status).toBe(400);
    });
  });

  describe("update user with non-existent id", () => {
    it("should return a 404", async () => {
      const response = await request(app)
        .put(`/api/users/${userIdNonExistent}`)
        .send(mockUserData);
      expect(response.status).toBe(404);
    });
  });
});

describe("deleteUserById", () => {
  const users = JSON.parse(readFileSync("./users.json"));
  const user = users[0];
  const userId = user.id;
  const userIdBroken = "sdfvdfvdf";
  const userIdNonExistent = "1d72d5e4-c5c3-46a0-8fa5-0a5a0532dcf8";

  describe("delete user with a correct id", () => {
    it("should return a 204", async () => {
      const response = await request(app).delete(`/api/users/${userId}`);
      expect(response.status).toBe(204);
    });
  });

  describe("delete user with wrong id", () => {
    it("should return a 400", async () => {
      const response = await request(app).delete(`/api/users/${userIdBroken}`);
      expect(response.status).toBe(400);
    });
  });

  describe("delete user with non-existent id", () => {
    it("should return a 404", async () => {
      const response = await request(app).delete(
        `/api/users/${userIdNonExistent}`
      );
      expect(response.status).toBe(404);
    });
  });
});
