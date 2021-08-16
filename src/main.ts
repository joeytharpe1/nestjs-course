import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //unwanted prop automatically stripped and removed
      transform: true, //transform dto to instance of class
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(5000);
}
bootstrap();
