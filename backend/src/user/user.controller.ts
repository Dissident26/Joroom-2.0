import { Get, Controller } from '@nestjs/common';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('/users')
  root() {
    return this.userService.findAll();
  }
}
