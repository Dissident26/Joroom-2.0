import { Get, Controller, Param, Delete } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { PostService } from './post.service';
import { Post, Comment } from '../database/entities';
import { CommentDto, PostDto } from 'src/database/dtos';

@ApiTags('Posts')
@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  @ApiOkResponse({ type: PostDto, isArray: true })
  findAll(): Promise<Post[]> {
    return this.postService.findAll();
  }

  @Get('/:id')
  @ApiOkResponse({ type: PostDto })
  findOne(@Param('id') id: string): Promise<Post | null> {
    return this.postService.findOne(parseInt(id));
  }

  @Get('/:id/comments')
  @ApiOkResponse({ type: CommentDto, isArray: true })
  findaAllById(@Param('id') id: string): Promise<Comment[]> {
    return this.postService.findAllCommentsByPostId(parseInt(id));
  }

  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.postService.delete(parseInt(id));
  }
}
