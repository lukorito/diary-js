import { getRepository } from 'typeorm';
import { User } from '../entities/User';
import { NextFunction, Response, Request } from 'express';
import { formatResponse } from '../helpers';

export class UserController {
  private userRepository = getRepository(User);

  async getAll(request: Request, response: Response, next: NextFunction) {
    const users = this.userRepository.find();
    response.send(users);
  }

  async save(request: Request, response: Response, next: NextFunction) {
    const { user } = request.body;
    try {
      const newUser = this.userRepository.create(user);
      await this.userRepository.save(newUser);
      const message = 'Successfully created user';
      formatResponse(response, 201, message, user);
    } catch (error) {
      throw error;
    }
  }

  async getOne(request: Request, response: Response, next: NextFunction) {
    try {
      const user = await this.userRepository.findOne({
        id: request.params.userId,
      });
      if (user) {
        const message = 'user found';
        formatResponse(response, 200, message, user);
      } else {
        const message = 'User not found';
        formatResponse(response, 400, message);
      }
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
      const isUser = await this.userRepository.findOne({
        id: request.params.userId,
      });
      if (!isUser) {
        const message = 'User not found';
        formatResponse(response, 400, message);
      } else {
        await this.userRepository.update(request.params.userId, user);
        const message = 'User has been updated';
        formatResponse(response, 200, message);
      }
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
