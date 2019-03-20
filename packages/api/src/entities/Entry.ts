import { Entity, Column, ManyToOne, BeforeInsert } from 'typeorm';
import { User } from './User';
import { BaseEntity } from './Base';
import { IsDefined } from 'class-validator';
import slug from 'slug';
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

  @Column()
  slug: string;

  @BeforeInsert()
  createSlug() {
    this.slug = slug(
      `${this.title} ${Math.floor(Math.random() * (100 - 0) + 0)}`,
      { lower: true, replacement: '-' },
    );
  }
}
