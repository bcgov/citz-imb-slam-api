import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { getConnection } from 'typeorm';
import { LicenseeService } from 'src/licensee/licensee.service';

@Injectable()
export class AuthService {
    constructor(
        private licenseeService: LicenseeService,
        private jwtService: JwtService,
    ) {}

    async authorizeUser(user: any): Promise<any> {
        const authorizedUser = await this.licenseeService.findOne({
            email: user.email,
        });

        if (authorizedUser) return authorizedUser;
        else return null;
    }

    async createUser(user: any) {
        await getConnection()
            .createQueryBuilder()
            .insert()
            .into('licensees')
            .values({
                name: user.username,
                email: user.email,
                role: 'Admin',
            })
            .execute();
    }

    async login(user: any) {
        let authorizedUser = await this.authorizeUser(user);

        if (!authorizedUser) {
            try {
                await this.createUser(user);
                authorizedUser = await this.authorizeUser(user);
            } catch (e) {
                authorizedUser = await this.authorizeUser(user);
            }
        }

        const { username: name, id: sub, role } = authorizedUser;

        const payload = { name, sub, role };

        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
