import { VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerDocumentOptions, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';



async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableVersioning({
    defaultVersion: "1.0",
    type: VersioningType.URI,
  });

  const document = new DocumentBuilder()
    .setTitle("Inventory Writer")
    .setDescription("The Inventory API description")
    .setVersion("1.0")
    .build();

  const writerDescriptorDocument = SwaggerModule.createDocument(app, document);
  SwaggerModule.setup("api/", app, writerDescriptorDocument);

  await app.listen(5000);
}
bootstrap();