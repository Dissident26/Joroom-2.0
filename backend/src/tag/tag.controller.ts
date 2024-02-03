import { Get, Controller, Param, Delete } from '@nestjs/common';

import { TagService } from './tag.service';

import { Post, Tag } from '../database/entities';

@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Get()
  findAll(): Promise<Tag[]> {
    return this.tagService.findAll();
  }

  @Get('/:id') //TODO: revisit usefullness of this endpont
  findOne(@Param('id') id: string): Promise<Tag | null> {
    return this.tagService.findOne(parseInt(id));
  }

  @Get('/:id/post')
  findAllPostsByTagId(@Param('id') id: string): Promise<Post[]> {
    return this.tagService.findAllPostsByTagId(parseInt(id));
  }

  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.tagService.delete(parseInt(id));
  }
}
