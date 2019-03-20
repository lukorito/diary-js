import { getManager } from 'typeorm';
import { Entry } from '../entities/Entry';
import { NextFunction, Response, Request } from 'express';
import { validate } from 'class-validator';
import { formatResponse } from '../helpers';
import slug = require('slug');

export class EntryController {
  private entryRepository = getManager().getRepository(Entry);

  async save(request: Request, response: Response, next: NextFunction) {
    const { entry } = request.body;
    try {
      const entryValidator = new Entry();
      entryValidator.title = entry.title;
      entryValidator.content = entry.content;

      const errors = await validate(entryValidator);

      if (errors.length > 0) {
        const validationErrors: any = [];
        let error = {};
        errors.forEach(({ property, constraints }) => {
          error = { property, constraints };
          validationErrors.push(error);
        });
        formatResponse(response, 400, 'Validation errors', validationErrors);
      } else {
        entry.created_by = request.params.userId;
        const newEntry = this.entryRepository.create(entry);
        await this.entryRepository.save(newEntry);
        formatResponse(
          response,
          201,
          'Successfully created the entry',
          newEntry,
        );
      }
    } catch (error) {
      throw error;
    }
  }

  async getAll(request: Request, response: Response, next: NextFunction) {
    const { userId } = request.params;
    try {
      const entries = await this.entryRepository.find({ created_by: userId });
      if (entries.length > 0) {
        const message =
          entries.length === 1 ? 'One entry found' : 'Entries found';
        formatResponse(response, 200, message, entries);
      } else {
        formatResponse(response, 400, 'No entries found');
      }
    } catch (error) {
      throw error;
    }
  }

  async getOne(request: Request, response: Response, next: NextFunction) {
    try {
      // tslint:disable-next-line:no-shadowed-variable
      const { userId, slug } = request.params;
      const entry = await this.entryRepository.findOne({
        slug,
        created_by: userId,
      });
      if (entry) {
        formatResponse(response, 200, 'Entry found', entry);
      } else {
        formatResponse(response, 404, 'Entry not found');
      }
    } catch (error) {
      throw error;
    }
  }

  async update(request: Request, response: Response, next: NextFunction) {
    const { entry } = request.body;
    try {
      const isEntry = await this.entryRepository.findOne({
        slug: request.params.slug,
      });
      if (!isEntry) {
        formatResponse(response, 404, 'Entry not found');
      } else {
        const entryValidator = new Entry();
        entryValidator.title = entry.title;
        entryValidator.content = entry.content;

        const errors = await validate(entryValidator);

        if (errors.length > 0) {
          const validationErrors: any = [];
          let error = {};
          errors.forEach(({ property, constraints }) => {
            error = { property, constraints };
            validationErrors.push(error);
          });
          formatResponse(response, 400, 'validation errors', validationErrors);
        } else {
          await this.entryRepository.update(
            { slug: request.params.slug },
            entry,
          );
          formatResponse(response, 200, 'Entry has been updated', entry);
        }
      }
    } catch (error) {
      throw error;
    }
  }

  async delete(request: Request, response: Response, next: NextFunction) {
    try {
      const isEntry = await this.entryRepository.findOne({
        slug: request.params.slug,
      });
      if (!isEntry) {
        formatResponse(response, 404, 'Entry not found');
      } else {
        await this.entryRepository.delete({ slug: request.params.slug });
        formatResponse(response, 200, 'Entry deleted');
      }
    } catch (error) {
      throw error;
    }
  }
}
