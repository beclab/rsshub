import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // --- Swagger setup for API documentation ---
  app.enableCors();
  await app.listen(3010);
}
bootstrap();
