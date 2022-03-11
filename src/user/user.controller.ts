/*
https://docs.nestjs.com/controllers#controllers
*/
import { Crud, CrudController } from '@nestjsx/crud';
import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from './user.entity';

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
@Controller('user')
export class UserController implements CrudController<UserEntity> {
  constructor(public service: UserService) {}
}
