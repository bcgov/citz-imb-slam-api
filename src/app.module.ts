import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import 'dotenv/config';
import { AssignedLicenseEntity } from './assignedLicense/assignedLicense.entity';
import { AssignedLicenseModule } from './assignedLicense/assignedLicense.module';
import { LicenseeEntity } from './licensee/licensee.entity';
import { LicenseeModule } from './licensee/licensee.module';
import { SoftwareTitleEntity } from './software/software.entity';
import { SoftwareModule } from './software/software.module';
import { HealthModule } from './health/health.module';
import { HttpModule } from '@nestjs/axios';

const env = {
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  synchronize: process.env.POSTGRES_SYNCHRONIZE === 'true' || false,
};
@Module({
  imports: [
    AssignedLicenseModule,
    LicenseeModule,
    ConfigModule.forRoot({}),
    SoftwareModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: env.host,
      port: env.port,
      username: env.username,
      password: env.password,
      database: env.database,
      entities: [SoftwareTitleEntity, LicenseeEntity, AssignedLicenseEntity],
      synchronize: env.synchronize,
    }),
    HealthModule,
    HttpModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
