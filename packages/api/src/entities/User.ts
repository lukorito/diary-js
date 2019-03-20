import { Entity, Column, OneToMany } from 'typeorm';
import { Entry } from './Entry';
import { BaseEntity } from './Base';
import {
  Validate,
  IsEmail,
  Min,
  Max,
  IsDefined,
  IsAlphanumeric,
} from 'class-validator';
import { IsPasswordValid } from '../validators/CustomPassword';
import { IsUserAlreadyExist } from '../validators/UserValidator';

@Entity()
export class User extends BaseEntity {
  @Column()
  @IsDefined({ message: '$property is required' })
  @IsAlphanumeric()
  firstname!: string;

  @Column()
  @IsDefined({ message: '$property is required' })
  @IsAlphanumeric()
  secondname!: string;

  @Column()
  @IsEmail()
  @IsDefined({ message: '$property is required' })
  @IsUserAlreadyExist({ message: 'User of email $value already exists' })
  email!: string;

  @Column({ select: false })
  @Validate(IsPasswordValid)
  @IsDefined({ message: '$property is required' })
  password!: string;

  @OneToMany(type => Entry, entry => entry.created_by)
  entries: Entry[];
}
