import { Request, Response, NextFunction } from 'express';
import { User } from '../entities/User';
import { getRepository } from 'typeorm';
import { hashPassword, checkIfPasswordsMatch } from './../utils';
import * as jwt from 'jsonwebtoken';

export class AuthController {
  private repo = getRepository(User);

  async signup(request: Request, response: Response, next: NextFunction) {
    const { user } = request.body;
    try {
      //  check if the user exists
      const isUser = await this.repo.find({ email: user.email });
      if (isUser.length === 0) {
        // hash the password
        user.password = await hashPassword(user.password);
        await this.repo.save(user);
        response.status(201).send({
          message: 'user created successfully',
        });
      } else {
        response.status(400).send({
          message: 'User already exists',
        });
      }
    } catch (error) {
      throw error;
    }
  }

  async login(request: Request, response: Response, next: NextFunction) {
    const { user } = request.body;
    try {
      //  check if the user exists
      const isUser = await this.repo.find({ email: user.email });
      if (isUser.length > 0) {
        const { password, id, email } = isUser[0];
        // check is password match
        const passwordMatch = await checkIfPasswordsMatch(
          user.password,
          password,
        );
        if (passwordMatch) {
          const token = jwt.sign({ userId: id }, 'secret', {
            expiresIn: '2 days',
          });
          console.log(token);
          response.status(200).send({
            message: 'Login successful',
            user: {
              email,
              token,
            },
          });
        } else {
          response.status(400).send({
            message: 'incorrect password',
          });
        }
      } else {
        response.status(400).send({
          message: 'user not found',
        });
      }
    } catch (error) {
      throw error;
    }
  }
}
