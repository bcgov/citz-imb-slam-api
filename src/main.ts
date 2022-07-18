import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
//! Important: load config before (!!!) you import AppModule
// https://github.com/nestjsx/crud/wiki/Controllers#global-options
import './configService';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.use((req, res, next) => {
        console.info(`-----\n${req.method}:${req.url}`);
        next();
    });

    app.enableCors({ origin: '*' });
    app.setGlobalPrefix('api/v1');

    const config = new DocumentBuilder()
        .setTitle('SLAM-API')
        .setVersion('1.0')
        .build();

    const document = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup('api/v1', app, document);

    await app.listen(3001);
}
bootstrap();
