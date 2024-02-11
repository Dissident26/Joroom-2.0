import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User, Post, Comment } from '../database/entities';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: number): Promise<User | null> {
    return this.userRepository.findOne({
      where: { id },
      select: {
        id: true,
        name: true,
        isActive: true,
        imageUrl: true,
        created_at: true,
        description: true,
      },
    });
  }

  async delete(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }

  async findAllPostsByUserId(id: number): Promise<Post[]> {
    const user = await this.userRepository.findOne({
      where: {
        posts: { user: { id } },
      },
      relations: ['posts', 'posts.tags'],
    });

    return user?.posts || [];
  }

  async findAllCommentsByUserId(id: number): Promise<Comment[]> {
    const user = await this.userRepository.findOne({
      where: {
        comments: { user: { id } },
      },
      relations: ['comments', 'comments.post'],
    });

    return user?.comments || [];
  }
}
