import { Entity, Column, PrimaryGeneratedColumn, JoinTable, ManyToMany } from 'typeorm';

import { Post } from './post.entity';

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(() => Post)
  @JoinTable()
  posts: Post[];

  @Column('text')
  content: string;
}
