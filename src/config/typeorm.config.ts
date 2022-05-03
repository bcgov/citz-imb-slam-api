import {
    TypeOrmModuleAsyncOptions,
    TypeOrmModuleOptions,
} from '@nestjs/typeorm';

export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
    useFactory: async (): Promise<TypeOrmModuleOptions> => {
        return {
            type: 'postgres',
            host: process.env.POSTGRES_HOST,
            port: parseInt(process.env.POSTGRES_PORT),
            username: process.env.POSTGRES_USER,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            entities: [__dirname + '/../**/*.entity{.ts,.js}'],
            synchronize: false,
            migrations: [__dirname + '/../migrations/*{.ts,.js}'],
            cli: {
                migrationsDir: __dirname + '../migrations',
            },
            extra: {
                charset: 'utf8mb4_unicode_ci',
            },
            logging: true,
        };
    },
};

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: 'postgres',
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT),
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    migrations: [__dirname + '/../migrations/*{.ts,.js}'],
    cli: {
        migrationsDir: __dirname + '../migrations',
    },
    extra: {
        charset: 'utf8mb4_unicode_ci',
    },
    logging: true,
};
