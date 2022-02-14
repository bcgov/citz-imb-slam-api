import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SoftwareController } from './software.controller';
import { SoftwareTitle } from './software.entity';
import { SoftwareService } from './software.service';

@Module({
  // imports: [TypeOrmModule.forFeature([SoftwareTitle])],
  controllers: [SoftwareController],
  providers: [SoftwareService],
})
export class SoftwareModule {}
