import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { applySwagger } from './config/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  applySwagger(app);

  await app.listen(parseInt(process.env.APP_PORT || ''));
}
bootstrap();
