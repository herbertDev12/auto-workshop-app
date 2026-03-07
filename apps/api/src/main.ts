import 'dotenv/config';
import { ZodValidationPipe } from 'nestjs-zod';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // use the Zod pipe with no options (constructor expects a schema or dto)
  app.useGlobalPipes(new ZodValidationPipe());
  // Global validation using Zod; it will reject invalid payloads
 

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Auto Workshop API')
    .setDescription('REST API for the auto‑workshop application')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('docs', app, swaggerDocument);

  await app.listen(process.env.PORT ?? 4000);
}
bootstrap();
