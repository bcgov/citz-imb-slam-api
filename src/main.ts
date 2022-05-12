import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import { CrudConfigService } from '@nestjsx/crud';

//! Important: load config before (!!!) you import AppModule
// https://github.com/nestjsx/crud/wiki/Controllers#global-options
CrudConfigService.load({
    routes: {
        only: [
            'getManyBase',
            'getOneBase',
            'createOneBase',
            'replaceOneBase',
            'deleteOneBase',
        ],
    },
});

import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.enableCors();
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
