import { Get, Controller, Param, Delete } from '@nestjs/common';

import { TagService } from './tag.service';

import { Tag } from '../entities/tag.entity';

@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Get()
  findAll(): Promise<Tag[]> {
    return this.tagService.findAll();
  }

  @Get('/:id')
  findOne(@Param('id') id: string): Promise<Tag | null> {
    return this.tagService.findOne(parseInt(id));
  }

  @Delete('/:id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.tagService.delete(parseInt(id));
  }
}
