import { Controller, UseGuards, Request, Post } from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';

@Controller()
export class AuthController {

    @UseGuards(LocalAuthGuard) //protegendo o acesso da rota com o auth guard
    @Post('auth/login') //endpoint da rota
    async login(@Request() req: any) { //o corpo do request é o user que vem de local.strategy
        return req.user;
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
*/