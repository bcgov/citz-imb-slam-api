import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { getConnection } from 'typeorm';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) {}

    async authorizeUser(user: any): Promise<any> {
        const authorizedUser = await this.usersService.findOne({
            email: user.email,
        });

        if (authorizedUser) return authorizedUser;
        else return null;
    }

    async createUser(user: any) {
        await getConnection()
            .createQueryBuilder()
            .insert()
            .into('users')
            .values({
                username: user.username,
                email: user.email,
                role: 'Admin',
            })
            .execute();
    }

    async login(user: any) {
        let authorizedUser = await this.authorizeUser(user);
        console.log('user', authorizedUser);
        if (!authorizedUser) {
            await this.createUser(user);
            authorizedUser = await this.authorizeUser(user);
            console.log('newUser', authorizedUser);
        }

        const { username: name, id: sub, role } = authorizedUser;

        const payload = { name, sub, role };

        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
