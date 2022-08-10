import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) {}

    async authorizeUser(email: string): Promise<any> {
        const authorizedUser = await this.usersService.findOne({ email });
        if (authorizedUser) return authorizedUser;

        return null;
    }

    async login(user: any) {
        let authorizedUser = await this.authorizeUser(user.email);
        console.log('user', authorizedUser);
        if (!authorizedUser) {
            // TODO: Add user to users table

            // await this.usersService.createOne(
            //     {
            //         parsed: null,
            //         options: null,
            //     },
            //     {
            //         username: user.username,
            //         email: user.email,
            //         role: 'Admin',
            //     },
            // );
            authorizedUser = await this.authorizeUser(user.email);
            console.log('addedUser', authorizedUser);
        }

        const { username: name, id: sub, role } = authorizedUser;

        const payload = { name, sub, role };

        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
