import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { UserEntity } from './user.entity';
import { UsersService } from './users.service';

@Crud({
    params: {
        id: {
            field: 'id',
            type: 'uuid',
            primary: true,
        },
    },
    model: { type: UserEntity },
})
@Controller('users')
export class UsersController implements CrudController<UserEntity> {
    constructor(public service: UsersService) {}
}
