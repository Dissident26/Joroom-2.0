import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, JoinColumn, OneToOne, ManyToOne } from 'typeorm';

import { Post } from './post.entity';
import { User } from './user.entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User)
  @JoinColumn()
  user: User;

  @OneToOne(() => Comment)
  @JoinColumn()
  parent: Comment | null = null;

  @ManyToOne(() => Post)
  @JoinColumn()
  post: Post;

  @Column('text')
  content: string;

  @CreateDateColumn()
  created_at: Date;
}
