import {
  ValidatorConstraint,
  ValidatorConstraintInterface,
  ValidationArguments,
} from 'class-validator';

@ValidatorConstraint()
export class IsPasswordValid implements ValidatorConstraintInterface {
  validate(password: string, args: ValidationArguments) {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
    return regex.test(password);
  }
  defaultMessage(args: ValidationArguments) {
    return '$property should contain at least 1 digit, small letter, capital letter';
  }
}
