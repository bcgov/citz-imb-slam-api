import { LicenseeService } from './licensee.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LicenseeEntity } from './licensee.entity';
import { LicenseeController } from './licensee.controller';

@Module({
  imports: [TypeOrmModule.forFeature([LicenseeEntity])],
  controllers: [LicenseeController],
  providers: [LicenseeService],
})
export class LicenseeModule {}
