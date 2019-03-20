import { IsDefined, IsEmail } from 'class-validator';

export class Login {
  @IsDefined({ message: '$property is required' })
  @IsEmail()
  email: string;

  @IsDefined({ message: '$property is required' })
  password: string;
}
