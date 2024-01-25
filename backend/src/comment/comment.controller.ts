import { Get, Delete, Controller, Param } from '@nestjs/common';

import { CommentService } from './comment.service';
import { Comment } from '../entities/comment.entity';

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get('/:id')
  findOne(@Param('id') id: string): Promise<Comment | null> {
    return this.commentService.findOne(parseInt(id));
  }

  @Delete('/:id')
  delete(@Param('id') id: string): Promise<void> {
    return this.commentService.delete(parseInt(id));
  }
}
