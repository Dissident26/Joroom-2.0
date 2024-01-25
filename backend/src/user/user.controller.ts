import { Get, Controller, Param, Delete } from '@nestjs/common';

import { UserService } from './user.service';
import { User } from '../entities/user.entity';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/user')
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get('/user/:id')
  findOne(@Param('id') id: string): Promise<User | null> {
    return this.userService.findOne(parseInt(id));
  }

  @Delete('/user/:id')
  async delete(@Param('id') id: string): Promise<void> {
    await this.userService.delete(parseInt(id));
  }
}
