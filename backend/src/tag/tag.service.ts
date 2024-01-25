import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Tag } from '../entities/tag.entity';

@Injectable()
export class TagService {
  constructor(
    @InjectRepository(Tag)
    private tagRepository: Repository<Tag>,
  ) {}

  findAll(): Promise<Tag[]> {
    return this.tagRepository.find();
  }
  //TODO: redo this to find by "content" field
  findOne(id: number): Promise<Tag | null> {
    return this.tagRepository.findOneBy({ id });
  }

  async delete(id: number): Promise<void> {
    await this.tagRepository.delete(id);
  }
}
