import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

//Guard serve para proteger a rota
//Ele que vai deixar ou não continuar o request
//Antes da requisição cair no controller, o guard que vai dizer (pode ir pro controller, ou não pode ir pro controller)
@Injectable()
export class LocalAuthGuard extends AuthGuard('local') {} //por ter colocado o 'local', o passport sabe que deve ir no local.strategy e rodar, e ao rodar, chama o validate
