/*
https://docs.nestjs.com/controllers#controllers
*/
import { Crud, CrudController } from '@nestjsx/crud';
import { Controller } from '@nestjs/common';
import { LicenseeService } from './licensee.service';
import { LicenseeEntity } from './licensee.entity';

@Crud({
  params: {
    id: {
      field: 'id',
      type: 'uuid',
      primary: true,
    },
  },
  model: { type: LicenseeEntity },
  query: {
    join: {
      softwareConnection: {
        eager: true,
        alias: 'assignedLicenses',
      },
      'softwareConnection.software': {
        eager: true,
      },
    },
  },
})
@Controller('licensee')
export class LicenseeController implements CrudController<LicenseeEntity> {
  constructor(public service: LicenseeService) {}
}
