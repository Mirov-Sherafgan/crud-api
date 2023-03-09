import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { NestExpressApplication } from "@nestjs/platform-express";
import { ConfigService } from "@nestjs/config";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.setGlobalPrefix("/api");
  const config: ConfigService = app.get(ConfigService);
  const port: number = config.get<number>("PORT");

  const configSwagger = new DocumentBuilder()
    .setTitle("Backend API Docs")
    .setDescription("Sample CRUD API.")
    .setVersion("1.0")
    .build();
  const document = SwaggerModule.createDocument(app, configSwagger);
  SwaggerModule.setup("/api/docs", app, document);

  console.log(`Server started on PORT: ${port}`);

  await app.listen(port);
}

bootstrap();
