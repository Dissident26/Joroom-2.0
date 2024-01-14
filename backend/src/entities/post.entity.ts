import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, OneToMany, JoinColumn, OneToOne, JoinTable, ManyToMany } from 'typeorm';

import { User } from './user.entity';
import { Comment } from './comment.entity';
import { Tag } from './tag.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @Column({
    length: 250,
  })
  title: string;

  @Column('text')
  content: string;

  @ManyToMany(() => Tag)
  @JoinTable()
  tags: Tag[];

  @OneToMany(() => Comment, (comment) => comment.post)
  @JoinTable()
  comments: Comment[];

  @CreateDateColumn()
  created_at: Date;
}
