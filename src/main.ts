import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Elimina los campos que no estén en el DTO
      forbidNonWhitelisted: true, // Lanza un error cuando un campo no está en el DTO
      transform: true, // Transforma los tipos de datos a los especificados en el DTO
      transformOptions: {
        enableImplicitConversion: true, // Convierte los tipos de datos a los especificados en el DTO
      },
    }),
  );

  app.setGlobalPrefix('/api/v2');

  await app.listen(3000);
}
bootstrap();
