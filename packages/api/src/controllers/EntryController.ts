import { getManager } from 'typeorm';
import { Entry } from '../entities/Entry';
import { NextFunction, Response, Request } from 'express';

export class EntryController {
  private repo = getManager().getRepository(Entry);

  async save(request: Request, response: Response, next: NextFunction) {
    const { entry } = request.body;
    try {
      const newEntry = this.repo.create(entry);
      await this.repo.save(newEntry);
      response.status(201).send({
        message: 'Successfully created the request',
      });
    } catch (error) {
      throw error;
    }
  }

  async getOne(request: Request, response: Response, next: NextFunction) {
    try {
      const entry = await this.repo.findOne({ id: request.params.id });
      if (entry) {
        response.status(200).send({
          message: 'found',
          entry,
        });
      } else {
        response.status(400).send({
          message: `Entry of id ${request.params.id} does not exist`,
        });
      }
    } catch (error) {
      throw error;
    }
  }

  async getOneByUserId(
    request: Request,
    response: Response,
    next: NextFunction,
  ) {
    try {
      const entry = await this.repo.findOne({
        id: request.params.id,
        created_by: request.params.userId,
      });
      if (entry) {
        response.status(200).send({
          message: 'found',
          entry,
        });
      } else {
        response.status(400).send({
          message: `Entry of id ${request.params.id} does not exist`,
        });
      }
    } catch (error) {
      throw error;
    }
  }

  async update(request: Request, response: Response, next: NextFunction) {
    const { entry } = request.body;
    try {
      const isEntry = await this.repo.findOne({ id: request.params.id });
      if (!isEntry) {
        response.send({
          message: 'Entry not found',
        });
      } else {
        await this.repo.update(request.params.id, entry);
        response.send({
          message: 'Entry has been updated',
        });
      }
    } catch (error) {
      throw error;
    }
  }

  async delete(request: Request, response: Response, next: NextFunction) {
    try {
      const isEntry = await this.repo.findOne({ id: request.params.id });
      if (!isEntry) {
        response.send({
          message: 'Entry not found',
        });
      } else {
        await this.repo.delete(request.params.id);
        response.send({
          message: 'Entry deleted',
        });
      }
    } catch (error) {
      throw error;
    }
  }
}
