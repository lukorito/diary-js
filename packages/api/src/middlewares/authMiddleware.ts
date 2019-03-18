import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';

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
      if (
        request.params.userId &&
        parseInt(request.params.userId, 10) !== userId
      ) {
        response.status(401).send({
          message: 'You are not allowed to perform this action',
        });
      } else {
        next();
      }
    } catch (error) {
      response.status(401).send({
        message: 'Token invalid or unavailable',
      });
    }
  } else {
    response.status(401).send({
      message: 'Token invalid or unavailable',
    });
  }
};
