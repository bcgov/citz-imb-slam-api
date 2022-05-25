import {
    Body,
    Controller,
    Get,
    Post,
    Request,
    UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller()
export class AppController {
    constructor(private readonly authService: AuthService) {}

    // @UseGuards(LocalAuthGuard)
    @Post('login')
    login(@Body() body): any {
        return this.authService.login(body.username);
    }

    @UseGuards(JwtAuthGuard)
    @Get('protected')
    getHello(@Request() req): string {
        return req.user;
    }
}
