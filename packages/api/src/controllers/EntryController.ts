import { getManager } from 'typeorm';
import { Entry } from '../entities/Entry';
import { NextFunction, Response, Request } from 'express';

export class EntryController {
  private entryRepository = getManager().getRepository(Entry);

  async save(request: Request, response: Response, next: NextFunction) {
    const { entry } = request.body;
    entry.created_by = request.params.userId;
    try {
      const newEntry = this.entryRepository.create(entry);
      await this.entryRepository.save(newEntry);
      response.status(201).send({
        message: 'Successfully created the entry',
      });
    } catch (error) {
      throw error;
    }
  }

  async getAll(request: Request, response: Response, next: NextFunction) {
    const { userId } = request.params;
    try {
      const entries = await this.entryRepository.find({ created_by: userId });
      if (entries.length > 0) {
        response.status(200).send({
          message: entries.length === 1 ? 'One entry found' : 'Entries found',
          entries,
        });
      } else {
        response.status(400).send({
          message: 'No entries found',
        });
      }
    } catch (error) {
      throw error;
    }
  }

  async getOne(request: Request, response: Response, next: NextFunction) {
    const { userId, id } = request.params;
    try {
      const entry = await this.entryRepository.findOne({
        id,
        created_by: userId,
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
      const isEntry = await this.entryRepository.findOne({
        id: request.params.id,
      });
      if (!isEntry) {
        response.send({
          message: 'Entry not found',
        });
      } else {
        await this.entryRepository.update(request.params.id, entry);
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
      const isEntry = await this.entryRepository.findOne({
        id: request.params.id,
      });
      if (!isEntry) {
        response.send({
          message: 'Entry not found',
        });
      } else {
        await this.entryRepository.delete(request.params.id);
        response.send({
          message: 'Entry deleted',
        });
      }
    } catch (error) {
      throw error;
    }
  }
}
