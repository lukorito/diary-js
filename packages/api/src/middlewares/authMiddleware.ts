import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { formatResponse } from '../helpers';

export const passMiddleware = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  next();
};

export const verifyAuthentication = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  const authHeader = request.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    const { SECRET_KEY }: any = process.env;
    try {
      const decoded = jwt.verify(token, SECRET_KEY);
      const { userId }: any = decoded;
      // checks if the user is making the request
      if (request.params.userId && request.params.userId !== userId) {
        const message = 'You are not allowed to perform this action';
        formatResponse(response, 401, message);
      } else {
        next();
      }
    } catch (error) {
      const message = 'Token invalid or unavailable';
      formatResponse(response, 401, message);
    }
  } else {
    const message = 'Token invalid or unavailable';
    formatResponse(response, 401, message);
  }
};
