import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LicenseeController } from './licensee.controller';
import { LicenseeEntity } from './licensee.entity';
import { LicenseeService } from './licensee.service';

@Module({
    imports: [TypeOrmModule.forFeature([LicenseeEntity])],
    controllers: [LicenseeController],
    providers: [LicenseeService],
    exports: [LicenseeService],
})
export class LicenseeModule {}
