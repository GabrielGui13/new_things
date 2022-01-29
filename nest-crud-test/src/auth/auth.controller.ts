import { Controller, UseGuards, Request, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './shared/local-auth.guard';

@Controller()
export class AuthController {

    constructor(
        private authService: AuthService
    ) {}

    @UseGuards(LocalAuthGuard) //protegendo o acesso da rota com o auth guard
    @Post('auth/login') //endpoint da rota
    async login(@Request() req: any) { //o corpo do request é o user que vem de local.strategy
        return this.authService.login(req.user);
    }
}

/* 
### FLUXO
- Dentro do controller eh criado o endpoint auth/login
- Esse endpoint é protegido por um guard LocalAuthGuard, que é chamado pelo @UseGuards()
- Esse Guard está configurado para procurar uma strategy com o nome passado por parâmetro lá no AuthGuard, que é 'local
- Ao chamar essa strategy, vai chamar a classe, que por sua vez, chama uma função chamada validate, que implementamos
para chamar o método validateUser do nosso AuthService
- Esse método validateUser, procura no banco de dados um usuário que coincida com o email e senha passados, e retorna ele
- O validate recebe esse valor, e passa ele para o Guard, e o Guard trás esse usuário para o controller, na Request()
- Dentro do controller, caso o usuario seja valido, o metodo login do AuthService eh chamado, que gera um access_token jwt

- Nos endpoints normais da aplicacao, o UseGuards com o JwtAuthGuard vai ser chamado, para fazer com que a rota necessite de autenticacao
- Ao utilizar @UseGuards(JwtAuthGuard), ele vai procurar no header um Bearer token, e extrai-lo, e com isso podera validar
- O JwtStrategy atraves do ExtractJwt.fromAuthHeaderAsBearerToken(), retira do bearer token, e verifica se o token eh valido ou nao expirou
- Caso o token nao esteja valido ou esteja expirado, ele retorna um erro 401 Unauthorized
- Caso o token seja valido, a aplicacao segue o curso normal
- Nessa api, sempre que o token expirar (60s), precisamos ir em auth/login, gerar o access_token (token), 
e colocar manualmente nos headers com Bearer token, para validar a autenticacao
*/