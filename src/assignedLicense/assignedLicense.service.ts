/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { AssignedLicenseEntity } from './assignedLicense.entity';

@Injectable()
export class AssignedLicenseService extends TypeOrmCrudService<AssignedLicenseEntity> {
  constructor(@InjectRepository(AssignedLicenseEntity) repo) {
    super(repo);
  }
}
