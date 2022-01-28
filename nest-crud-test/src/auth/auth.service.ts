import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {

    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) {}

    async validateUser(userEmail: string, userPassword: string) {
        const user = await this.usersService.findByEmail(userEmail);

        if (user && user.password === userPassword) {
            const { id, name, email } = user;
            return { id, name, email }
        }

        return null;
    }

    async login(user: any) {

    }
}
