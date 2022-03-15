import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { SoftwareTitleEntity } from './software.entity';
import { SoftwareService } from './software.service';

@Crud({
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true,
    },
  },
  model: {
    type: SoftwareTitleEntity,
  },
  // query: {
  //   join: {
  //     user: {
  //       eager: true,
  //     },
  //   },
  // },
})
@Controller('software')
export class SoftwareController implements CrudController<SoftwareTitleEntity> {
  constructor(public service: SoftwareService) {}
}
