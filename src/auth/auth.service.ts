import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) {}

    async authorizeUser(username: string): Promise<any> {
        const authorizedUser = await this.usersService.findOne({ username });
        if (authorizedUser) return authorizedUser;

        return null;
    }

    async login(username: string) {
        const {
            username: name,
            id: sub,
            role,
        } = await this.authorizeUser(username);

        const payload = { name, sub, role };

        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
