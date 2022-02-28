import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SoftwareModule } from './software/software.module';
import { ConfigModule } from '@nestjs/config';
import 'dotenv/config';
import { SoftwareTitle } from './software/software.entity';

console.log(
  'process.env.POSTGRES_SYNCHRONIZE',
  process.env.POSTGRES_SYNCHRONIZE,
);

const env = {
  host: process.env.SLAM_DB_SERVICE_SERVICE_HOST || 'localhost',
  port: 5432,
  username: process.env.POSTGRES_USER || 'postgres',
  password: process.env.POSTGRES_PASSWORD || 'snowball',
  database: process.env.POSTGRES_DATABASE || 'slam-db',
  synchronize: process.env.POSTGRES_SYNCHRONIZE === 'true' || false,
};

console.log('env', env);
console.log('process.env', process.env);

@Module({
  imports: [
    ConfigModule.forRoot(),
    SoftwareModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: env.host,
      port: env.port,
      username: env.username,
      password: env.password,
      database: env.database,
      entities: [SoftwareTitle],
      synchronize: env.synchronize,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
