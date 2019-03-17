import { NextFunction, Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';

export const authenticatedRoutes = (
  request: Request,
  response: Response,
  next: NextFunction,
) => {
  console.log(request.headers);
  next();
};

export const nonAuthentiatedRoutes = (
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
      next();
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
