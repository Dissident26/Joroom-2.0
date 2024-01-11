import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { applySwagger } from './config/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  applySwagger(app);

  await app.listen(parseInt(process.env.PORT || ''));
}
bootstrap();
