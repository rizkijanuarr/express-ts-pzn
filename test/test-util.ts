import { prismaClient } from "../src/application/database";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

export class UserTest {
  static async delete() {
    await prismaClient.user.deleteMany({
      where: {
        username: "test",
      },
    });
  }

  static async create() {
    await prismaClient.user.create({
      data: {
        username: "test",
        password: await bcrypt.hash("test", 10),
        name: "test",
        token: "test",
      },
    });
  }
}
