import { Get, Controller, Param, Delete } from '@nestjs/common';

import { PostService } from './post.service';
import { Post } from '../entities/post.entity';

@Controller()
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get('/post')
  findAll(): Promise<Post[]> {
    return this.postService.findAll();
  }

  @Get('/post/:id')
  findOne(@Param('id') id: string): Promise<Post | null> {
    return this.postService.findOne(parseInt(id));
  }

  @Delete('/post/:id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.postService.delete(parseInt(id));
  }
}
