import { Entity, Column, ManyToOne } from 'typeorm';
import { User } from './User';
import { BaseEntity } from './Base';
import { IsDefined } from 'class-validator';

@Entity()
export class Entry extends BaseEntity {
  @Column()
  @IsDefined({ message: '$property is required' })
  title!: string;

  @Column()
  @IsDefined({ message: '$property is required' })
  content!: string;

  @ManyToOne(type => User, user => user.entries)
  created_by: User;
}
