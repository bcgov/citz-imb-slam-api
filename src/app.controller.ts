import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
    constructor(private readonly authService: AuthService) {}

    @Post('login')
    login(@Body() body): any {
        return this.authService.login(body.username);
    }
}
