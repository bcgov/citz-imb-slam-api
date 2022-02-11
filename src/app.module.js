import { Module } from '@nestjs/common';
import { SoftwareModule } from './software/software.module';

@Module({
  imports: [SoftwareModule],
})
export class AppModule { }
