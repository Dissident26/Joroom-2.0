import { NestFactory } from '@nestjs/core';
import * as session from 'express-session';
import * as passport from 'passport';

import { AppModule } from './app.module';
import { applySwagger } from './config/swagger.config';
import { sessionConfig } from './config/auth.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  applySwagger(app);

  app.use(session(sessionConfig));

  app.use(passport.initialize());
  app.use(passport.session());

  await app.listen(Number(process.env.APP_PORT));
}
bootstrap();
