import { LicenseeModule } from './licensee/licensee.module';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import 'dotenv/config';
import { SoftwareTitleEntity } from './software/software.entity';
import { SoftwareModule } from './software/software.module';
import { LicenseeEntity } from './licensee/licensee.entity';
import { AssignedLicenseModule } from './assignedLicense/assignedLicense.module';
import { AssignedLicenseEntity } from './assignedLicense/assignedLicense.entity';

const env = {
  host: process.env.SLAM_DB_SERVICE_SERVICE_HOST || 'localhost',
  port: 5432,
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DATABASE,
  synchronize: process.env.POSTGRES_SYNCHRONIZE === 'true' || false,
};
@Module({
  imports: [
    AssignedLicenseModule,
    LicenseeModule,
    ConfigModule.forRoot(),
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
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
