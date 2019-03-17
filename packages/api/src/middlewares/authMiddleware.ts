import { NextFunction, Request, Response } from 'express';

export const authenticatedRoutes = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log('This endpoint is authenticated');
  next();
};

export const nonAuthentiatedRoutes = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  console.log('this is not authenticated');
  next();
};
