/*
https://docs.nestjs.com/controllers#controllers
*/
import { Crud, CrudController } from '@nestjsx/crud';
import { Controller } from '@nestjs/common';
import { UserService } from './user.service';
import { User } from './user.entity';

@Crud({
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true,
    },
  },
  model: { type: User },
})
@Controller('user')
export class UserController implements CrudController<User> {
  constructor(public service: UserService) {}
}
