import { Controller, UseGuards } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
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
@UseGuards(JwtAuthGuard)
@Controller('licensee')
export class LicenseeController implements CrudController<LicenseeEntity> {
    constructor(public service: LicenseeService) {}
}
