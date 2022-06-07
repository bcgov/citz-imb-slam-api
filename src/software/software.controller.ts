import { Controller, UseGuards } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { SoftwareTitleEntity } from './software.entity';
import { SoftwareService } from './software.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

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
    query: {
        join: {
            licenseeConnection: {
                eager: true,
                alias: 'assignedLicenses',
            },
            'licenseeConnection.licensee': {
                eager: true,
            },
        },
    },
})
@UseGuards(JwtAuthGuard)
@Controller('software')
export class SoftwareController implements CrudController<SoftwareTitleEntity> {
    constructor(public service: SoftwareService) {}
}
