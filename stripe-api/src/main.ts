import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupDocumentation } from './common/documentation/setup';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors();

  setupDocumentation(app);

  await app.listen(process.env.PORT || 4000);
}
bootstrap();
