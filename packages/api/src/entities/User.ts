import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Entry } from './Entry';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname!: string;

  @Column()
  secondname!: string;

  @Column()
  email!: string;

  @Column()
  password!: string;

  @OneToMany(type => Entry, entry => entry.created_by)
  entries: Entry[];
}
