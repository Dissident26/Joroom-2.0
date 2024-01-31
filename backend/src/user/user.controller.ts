import { Get, Controller, Param, Delete } from '@nestjs/common';

import { UserService } from './user.service';
import { User, Post, Comment } from '../database/entities';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id') id: string): Promise<User | null> {
    return this.userService.findOne(parseInt(id));
  }

  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.userService.delete(parseInt(id));
  }

  @Get('/:id/posts')
  findAllPostsByUserId(@Param('id') id: string): Promise<Post[] | null> {
    return this.userService.findAllPostsByUserId(parseInt(id));
  }

  @Get('/:id/comments')
  findAllCommentsByUserId(@Param('id') id: string): Promise<Comment[] | null> {
    return this.userService.findAllCommentsByUserId(parseInt(id));
  }
}
