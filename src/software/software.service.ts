import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { SoftwareTitle } from './software.entity';

@Injectable()
export class SoftwareService extends TypeOrmCrudService<SoftwareTitle> {
  constructor(@InjectRepository(SoftwareTitle) repo) {
    super(repo);
  }
}
