import { Get, Controller, Param, Delete } from '@nestjs/common';

import { PostService } from './post.service';
import { Post } from '../entities/post.entity';

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

  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.postService.delete(parseInt(id));
  }
}
