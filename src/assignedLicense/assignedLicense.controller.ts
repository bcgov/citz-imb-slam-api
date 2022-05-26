/*
https://docs.nestjs.com/controllers#controllers
*/

import { Controller, UseGuards } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AssignedLicenseEntity } from './assignedLicense.entity';
import { AssignedLicenseService } from './assignedLicense.service';

@Crud({
    params: {
        id: {
            field: 'id',
            type: 'uuid',
            primary: true,
        },
    },
    model: { type: AssignedLicenseEntity },
})
@UseGuards(JwtAuthGuard)
@Controller('assigned-license')
export class AssignedLicenseController
    implements CrudController<AssignedLicenseEntity>
{
    constructor(public service: AssignedLicenseService) {}
}
