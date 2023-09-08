import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.setGlobalPrefix('api');

  app.useGlobalPipes(new ValidationPipe());


  const config = new DocumentBuilder()
    .setTitle('Api Actor')
    .setDescription('Crud de la tabla Actor de Sakila')
    .setVersion('1.0')
    .addTag('actors')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

    await app.listen(3000);
}
bootstrap();
