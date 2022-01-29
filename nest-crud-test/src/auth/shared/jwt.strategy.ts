import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable } from '@nestjs/common';
import { jwtConstants } from './constants';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) { //herda uma strategy do passport
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), //pega o token do header
      ignoreExpiration: false, //nao vai ignorar o tempo de expiracao
      secretOrKey: jwtConstants.secret, //a chave/secret do jwt
    });
  }

  async validate(payload: any) { //regras de negocio da aplicacao
    return { userId: payload.sub, username: payload.username }; //payload eh o 'body' do token
  }
}
