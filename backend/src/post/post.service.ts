import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Post } from '../database/entities';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private postRepository: Repository<Post>,
  ) {}

  findAll(): Promise<Post[]> {
    return this.postRepository.find({
      relations: ['user', 'tags'],
    });
  }

  findOne(id: number): Promise<Post | null> {
    return this.postRepository.findOne({
      where: { id },
      relations: ['user', 'tags'],
    });
  }

  async delete(id: number): Promise<void> {
    await this.postRepository.delete(id);
  }
}
