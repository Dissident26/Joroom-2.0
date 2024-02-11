import { Get, Controller, Param, Delete } from '@nestjs/common';

import { PostService } from './post.service';
import { Post, Comment } from '../database/entities';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  findAll(): Promise<Post[]> {
    return this.postService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id') id: string): Promise<Post | null> {
    return this.postService.findOne(parseInt(id));
  }

  @Get('/:id/comments')
  findaAllById(@Param('id') id: string): Promise<Comment[]> {
    return this.postService.findAllCommentsByPostId(parseInt(id));
  }

  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.postService.delete(parseInt(id));
  }
}
