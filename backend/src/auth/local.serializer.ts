import { PassportSerializer } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';

import { UserService } from 'src/user/user.service';
import { User } from '../database/entities';

@Injectable()
export class LocalSerializer extends PassportSerializer {
  constructor(private readonly userService: UserService) {
    super();
  }

  serializeUser(user: User, done: CallableFunction) {
    done(null, user.id);
  }

  async deserializeUser(userId: string, done: CallableFunction) {
    const user = await this.userService.findOne(Number(userId));

    done(null, user);
  }
}
