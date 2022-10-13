import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import * as csurf from 'csurf';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(helmet());
  app.use(csurf());
  app.flushLogs();
  app.enableVersioning();
  app.setGlobalPrefix('/api');

  await app.listen(3000);
}
bootstrap();
