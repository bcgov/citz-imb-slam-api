import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { SoftwareTitle } from './software.entity';
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
    type: SoftwareTitle,
  },
})
@Controller('software')
export class SoftwareController implements CrudController<SoftwareTitle> {
  constructor(public service: SoftwareService) {}
}
