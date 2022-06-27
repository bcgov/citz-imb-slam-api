import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import 'dotenv/config';
import { AssignedLicenseModule } from './assignedLicense/assignedLicense.module';
import { typeOrmAsyncConfig } from './config/typeorm.config';
import { HealthModule } from './health/health.module';
import { LicenseeModule } from './licensee/licensee.module';
import { SoftwareModule } from './software/software.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { AppController } from './app.controller';

@Module({
    imports: [
        AssignedLicenseModule,
        LicenseeModule,
        ConfigModule.forRoot({}),
        SoftwareModule,
        TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
        HealthModule,
        HttpModule,
        AuthModule,
        UsersModule,
    ],
    controllers: [AppController],
    providers: [],
})
export class AppModule {}
