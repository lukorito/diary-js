import { Response } from "express";

export const formatResponse = (statusCode: number, response: Response) => {
  return response.status(statusCode).send(response);
};
