import { Get, Controller, Param } from '@nestjs/common';

import { UserService } from './user.service';
import { routes } from '../routes/routes';
import { User } from '../entities/user.entity';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get(routes.users.root)
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  @Get(routes.users.user)
  findOne(@Param('id') id: string): Promise<User | null> {
    return this.userService.findOne(parseInt(id));
  }
}
