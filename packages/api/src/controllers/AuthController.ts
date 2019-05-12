import { Request, Response, NextFunction } from 'express';
import { User } from '../entities/User';
import { getRepository } from 'typeorm';
import { hashPassword, checkIfPasswordsMatch } from './../utils';
import * as jwt from 'jsonwebtoken';
import { validate } from 'class-validator';
import { Login } from '../validators/LoginValidator';
import dotenv from 'dotenv';
import { formatResponse } from '../helpers';

dotenv.config({ path: '../../.env' });
export class AuthController {
  private authRepository = getRepository(User);

  async signup(request: Request, response: Response, next: NextFunction) {
    const { user } = request.body;
    try {
      //  check if the user exists
      const signupValidator = new User();
      signupValidator.email = user.email;
      signupValidator.password = user.password;
      signupValidator.firstname = user.firstname;
      signupValidator.secondname = user.secondname;

      const errors = await validate(signupValidator);

      if (errors.length > 0) {
        const validationErrors: any = [];
        let error = {};
        errors.forEach(({ property, constraints }) => {
          error = { property, constraints };
          validationErrors.push(error);
        });
        formatResponse(response, 400, 'validation errors', validationErrors);
      } else {
        // hash password
        user.password = await hashPassword(user.password);
        await this.authRepository.save(user);
        formatResponse(response, 201, 'user created successfully', user);
      }
    } catch (error) {
      throw error;
    }
  }

  async login(request: Request, response: Response, next: NextFunction) {
    const { user } = request.body;
    const { SECRET_KEY }: any = process.env;
    try {
      //  check if the user exists
      const loginValidator = new Login();
      loginValidator.email = user.email;
      loginValidator.password = user.password;

      const errors = await validate(loginValidator);
      if (errors.length > 0) {
        const validationErrors: any = [];
        let error = {};
        errors.forEach(({ property, constraints }) => {
          error = { property, constraints };
          validationErrors.push(error);
        });
        formatResponse(response, 400, 'validation errors', validationErrors);
      } else {
        const isUser = await this.authRepository.find({ email: user.email });
        if (isUser.length > 0) {
          const { password, id, email } = isUser[0];
          // check is password match
          const passwordMatch = await checkIfPasswordsMatch(
            user.password,
            password,
          );
          if (passwordMatch) {
            const token = jwt.sign({ userId: id }, SECRET_KEY, {
              expiresIn: '2 days',
            });
            formatResponse(response, 200, 'login successful', {
              email,
              token,
              id,
            });
          } else {
            formatResponse(response, 400, 'incorrect password');
          }
        } else {
          formatResponse(response, 400, 'user not found');
        }
      }
    } catch (error) {
      throw error;
    }
  }
}
