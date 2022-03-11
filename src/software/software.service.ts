import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { SoftwareTitleEntity } from './software.entity';

@Injectable()
export class SoftwareService extends TypeOrmCrudService<SoftwareTitleEntity> {
  constructor(@InjectRepository(SoftwareTitleEntity) repo) {
    super(repo);
  }
}
