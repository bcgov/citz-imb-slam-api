/*
https://docs.nestjs.com/modules
*/
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssignedLicenseController } from './assignedLicense.controller';
import { AssignedLicenseEntity } from './assignedLicense.entity';
import { AssignedLicenseService } from './assignedLicense.service';

@Module({
    imports: [TypeOrmModule.forFeature([AssignedLicenseEntity])],
    controllers: [AssignedLicenseController],
    providers: [AssignedLicenseService],
})
export class AssignedLicenseModule {}
