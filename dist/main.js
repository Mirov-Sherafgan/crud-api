"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const config_1 = require("@nestjs/config");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix("/api");
    const config = app.get(config_1.ConfigService);
    const port = config.get("PORT");
    const configSwagger = new swagger_1.DocumentBuilder()
        .setTitle("Backend API Docs")
        .setDescription("Sample CRUD API.")
        .setVersion("1.0")
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, configSwagger);
    swagger_1.SwaggerModule.setup("/api/docs", app, document);
    console.log(`Server started on PORT: ${port}`);
    await app.listen(port);
}
bootstrap();
//# sourceMappingURL=main.js.map