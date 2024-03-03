import { NestFactory } from '@nestjs/core';
import * as session from 'express-session';

import { AppModule } from './app.module';
import { applySwagger } from './config/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  applySwagger(app);

  app.use(
    session({
      secret: process.env.SESSION_SECRET!,
      resave: false,
      saveUninitialized: false,
      cookie: {
        secure: true,
        maxAge: Number(process.env.SESSION_MAX_AGE),
      },
    }),
  );

  await app.listen(Number(process.env.APP_PORT));
}
bootstrap();
