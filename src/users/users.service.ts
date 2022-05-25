import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { UserEntity } from './user.entity';

@Injectable()
export class UsersService extends TypeOrmCrudService<UserEntity> {
    constructor(@InjectRepository(UserEntity) repo) {
        super(repo);
    }
}
