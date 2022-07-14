import { CrudConfigService } from '@nestjsx/crud';

CrudConfigService.load({
    routes: {
        only: [
            'getManyBase',
            'getOneBase',
            'createOneBase',
            'replaceOneBase',
            'deleteOneBase',
        ],
    },
});
