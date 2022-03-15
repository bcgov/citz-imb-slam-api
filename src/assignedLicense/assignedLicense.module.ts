import { AssignedLicenseController } from './assignedLicense.controller';
import { AssignedLicenseService } from './assignedLicense.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AssignedLicenseEntity } from './assignedLicense.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AssignedLicenseEntity])],
  controllers: [AssignedLicenseController],
  providers: [AssignedLicenseService],
})
export class AssignedLicenseModule {}
