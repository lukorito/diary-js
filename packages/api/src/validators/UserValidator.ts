import {
  registerDecorator,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';
import { getRepository } from 'typeorm';
import { User } from '../entities/User';

@ValidatorConstraint()
export class IsUserAlreadyExistConstraint
  implements ValidatorConstraintInterface {
  async validate(email: string, args: ValidationArguments) {
    const user = await getRepository(User).findOne({ email });
    return !user;
  }
}

export const isUserAlreadyExist = (validationOptions: ValidationOptions) => (
  object: object,
  propertyName: string,
) => {
  registerDecorator({
    target: object.constructor,
    propertyName,
    options: validationOptions,
    constraints: [],
    validator: IsUserAlreadyExistConstraint,
  });
};
