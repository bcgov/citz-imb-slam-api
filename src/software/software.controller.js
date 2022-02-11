import { Controller, Get } from '@nestjs/common';

@Controller('software')
export class SoftwareController {
    @Get()
    getSoftware() {
        return 'the software'
    }
}
