import { getManager } from "typeorm";
import { User } from "../entities/User";
import { NextFunction, Response, Request } from "express";

export class UserController {
  private repo = getManager().getRepository(User);

  async getAll(request: Request, response: Response, next: NextFunction) {
    const users = this.repo.find();
    response.send(users);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    const { user } = request.body;
    try {
      const newUser = this.repo.create(user);
      await this.repo.save(newUser);
      response.status(201).send({
        message: "Successfully created user",
      });
    } catch (error) {
      throw error;
    }
  }

  async getOne(request: Request, response: Response, next: NextFunction) {
    try {
      const user = await this.repo.findOne({ id: request.params.id });
      if (user) {
        response.send(user);
      }
      response.status(400).send({
        message: "User not found",
      });
    } catch (error) {
      throw error;
    }
  }

  async getByEmail(request: Request, response: Response, next: NextFunction) {
    // Todo
  }

  async update(request: Request, response: Response, next: NextFunction) {
    const { user } = request.body;
    try {
      // checks for user
      const isUser = await this.repo.findOne({ id: request.params.id });
      if (!isUser) {
        response.status(400).send({
          message: "user not found",
        });
      } else {
        await this.repo.update(request.params.id, user);
        response.send({ message: "user updated" });
      }
    } catch (error) {
      throw error;
    }
  }
}
