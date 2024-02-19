import { Get, Controller, Param, Delete } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { UserService } from './user.service';
import { User, Post, Comment } from '../database/entities';
import { UserDto, PostDto, CommentDto } from '../database/dtos';

@ApiTags('Users')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOkResponse({ type: UserDto, isArray: true })
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get('/:id')
  @ApiOkResponse({ type: UserDto })
  findOne(@Param('id') id: string): Promise<User | null> {
    return this.userService.findOne(parseInt(id));
  }

  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.userService.delete(parseInt(id));
  }

  @Get('/:id/posts')
  @ApiOkResponse({ type: PostDto, isArray: true })
  findAllPostsByUserId(@Param('id') id: string): Promise<Post[] | null> {
    return this.userService.findAllPostsByUserId(parseInt(id));
  }

  @Get('/:id/comments')
  @ApiOkResponse({ type: CommentDto, isArray: true })
  findAllCommentsByUserId(@Param('id') id: string): Promise<Comment[] | null> {
    return this.userService.findAllCommentsByUserId(parseInt(id));
  }
}
