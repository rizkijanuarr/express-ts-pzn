import supertest from "supertest";
import { web } from "../src/application/web";
import { UserTest } from "./test-util";

describe("REGISTER API", () => {
  // Always run after each test and remove data from database
  afterEach(async () => {
    await UserTest.delete();
  });

  // Fail
  describe("Fail /api/users", () => {
    it("should reject register new user if request is invalid", async () => {
      const response = await supertest(web).post("/api/users").send({
        username: "",
        password: "",
        name: "",
      });
      console.log("Response Body:", JSON.stringify(response.body, null, 2));
      console.log("Status:", response.status);
      expect(response.status).toBe(400);
      expect(response.body.errors).toBeDefined();
    });
  });

  // Success
  describe("Success /api/users", () => {
    it("should register new user", async () => {
      const response = await supertest(web).post("/api/users").send({
        username: "test",
        password: "test",
        name: "test",
      });
      console.log("Response Body:", JSON.stringify(response.body, null, 2));
      console.log("Status:", response.status);

      expect(response.status).toBe(201);
      expect(response.body.data.username).toBe("test");
      expect(response.body.data.name).toBe("test");
    });
  });
});

describe("LOGIN API", () => {
  // Always run before each test
  // beforeEach(async () => {
  //   await UserTest.create();
  // });

  // Always run after each test and remove data from database
  // beforeEach(async () => {
  //   await UserTest.delete();
  // });

  // Success
  describe("Success /api/users/login", () => {
    it("should be able to login", async () => {
      const response = await supertest(web).post("/api/users/login").send({
        username: "test",
        password: "test",
      });
      console.log("Response Body:", JSON.stringify(response.body, null, 2));
      console.log("Status:", response.status);
      expect(response.status).toBe(200);
      expect(response.body.data.username).toBe("test");
      expect(response.body.data.name).toBe("test");
      expect(response.body.data.token).toBeDefined();
    });
  });

  // Fail username is wrong
  describe("Fail USERNAME /api/users/login", () => {
    it("should reject to login, if username is wrong", async () => {
      const response = await supertest(web).post("/api/users/login").send({
        username: "salah",
        password: "test",
      });
      console.log("Response Body:", JSON.stringify(response.body, null, 2));
      console.log("Status:", response.status);
      expect(response.status).toBe(401);
      expect(response.body.errors).toBeDefined();
    });
  });

  // Fail password is wrong
  describe("Fail PASSWORD /api/users/login", () => {
    it("should reject to login, if password is wrong", async () => {
      const response = await supertest(web).post("/api/users/login").send({
        username: "test",
        password: "salah",
      });
      console.log("Response Body:", JSON.stringify(response.body, null, 2));
      console.log("Status:", response.status);
      expect(response.status).toBe(401);
      expect(response.body.errors).toBeDefined();
    });
  });
});
