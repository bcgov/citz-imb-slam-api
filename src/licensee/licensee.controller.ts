/*
https://docs.nestjs.com/controllers#controllers
*/
import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { LicenseeEntity } from './licensee.entity';
import { LicenseeService } from './licensee.service';

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
