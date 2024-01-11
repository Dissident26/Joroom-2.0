import { Get, Controller, Render } from '@nestjs/common';

@Controller()
export class UserController {
  @Get()
  @Render('index')
  root() {
    return { message: 'Hello world!' };
  }
}
