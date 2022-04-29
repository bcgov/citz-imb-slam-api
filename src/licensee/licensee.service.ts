/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { LicenseeEntity } from './licensee.entity';

@Injectable()
export class LicenseeService extends TypeOrmCrudService<LicenseeEntity> {
    constructor(@InjectRepository(LicenseeEntity) repo) {
        super(repo);
    }
}
