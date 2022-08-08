import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
    constructor(private readonly authService: AuthService) {}

    @Get('/auth/callback/keycloak')
    login(@Body() body): any {
        return this.authService.login(body.idir_username);
    }
}
