import { Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { AuthService } from './auth.service';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-up')
  signUp() {
    this.authService.signUp();
  }
  @Post('sign-in')
  signIn() {
    this.authService.signIn();
  }
  @Post('log-out')
  logOut() {
    this.authService.logOut();
  }
}
