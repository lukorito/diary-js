import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import { getRepository } from 'typeorm';
import { Entry } from '../entities/Entry';

@ValidatorConstraint()
export class IsEntryAlreadyExistConstraint
  implements ValidatorConstraintInterface {
  async validate(id: string, args: ValidationArguments) {
    const entry = await getRepository(Entry).findOne({ id });
    return !entry;
  }
}

export const IsEntryAlreadyExist = (validationOptions: ValidationOptions) => (
  object: object,
  propertyName: string,
) => {
  registerDecorator({
    target: object.constructor,
    propertyName,
    options: validationOptions,
    constraints: [],
    validator: IsEntryAlreadyExistConstraint,
  });
};
