import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Comment } from '../entities/comment.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private commentRepository: Repository<Comment>,
  ) {}

  findAllByPostId(postId: number): Promise<Comment[]> {
    return this.commentRepository.find({
      where: {
        post: {
          id: postId,
        },
      },
    });
  }

  findOne(id: number): Promise<Comment | null> {
    return this.commentRepository.findOneBy({ id });
  }

  async delete(id: number): Promise<void> {
    await this.commentRepository.delete(id);
  }
}
