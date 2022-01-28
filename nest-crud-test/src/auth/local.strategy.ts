import { Injectable, UnauthorizedException } from "@nestjs/common";
import { Strategy } from "passport-local";
import { PassportStrategy } from "@nestjs/passport";
import { AuthService } from "./auth.service";

//estratégia local de autenticação
@Injectable() //injetável, para não criar uma instância na hora de usar
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super({
            usernameField: "email", //mudou os nomes para ser condizente no validate
            passwordField: "password",
        });
    }

    async validate(email: string, password: string): Promise<any> { //chamado automaticamente pelo passport
        const user = await this.authService.validateUser(email, password);
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}