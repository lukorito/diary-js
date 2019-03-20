import { Response } from 'express';

export const formatResponse = (
  response: Response,
  statusCode: number,
  message: string,
  data?: any,
) => {
  return response.status(statusCode).send({
    message,
    data,
  });
};
