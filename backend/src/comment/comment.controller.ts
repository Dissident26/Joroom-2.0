import { Get, Delete, Controller, Param } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

import { CommentService } from './comment.service';
import { Comment } from '../database/entities';
import { CommentDto } from 'src/database/dtos';

@ApiTags('Comments')
@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get('/:id')
  @ApiOkResponse({ type: CommentDto })
  findOne(@Param('id') id: string): Promise<Comment | null> {
    return this.commentService.findOne(parseInt(id));
  }

  @Delete('/:id')
  delete(@Param('id') id: string): Promise<void> {
    return this.commentService.delete(parseInt(id));
  }
}
