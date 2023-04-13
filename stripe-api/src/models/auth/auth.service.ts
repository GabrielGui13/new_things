/*
https://docs.nestjs.com/providers#services
*/
import { PrismaService } from 'src/common/database/prisma.service';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import AuthLoginInput from './dto/login.input';
import { NotFoundException } from '@nestjs/common';
import { comparePassword, hashPassword } from 'src/common/helpers/crypto';
import { JwtService } from '@nestjs/jwt';
import { Role, UserPlanStatus, Users } from '@prisma/client';
import { UnauthorizedException } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import AuthNewPasswordInput from './dto/new-password.input';

export type UserType = {
  id: string;
  external_id: string;
  name: string;
  email: string;
  role: Role;
  // plan_status: UserPlanStatus;
};

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private readonly mailerService: MailerService,
  ) {}

  async jwtToken(user: any): Promise<any> {
    const payload = {
      id: user.id,
      external_id: user.external_id,
      name: user.name,
      email: user.email,
      role: user.role,
      plan_status: user.plan_status
    };
    return {
      access_token: this.jwtService.sign(payload),
			user
    };
  }

  async login({ email, password }: AuthLoginInput): Promise<any> {
    const user = await this.prisma.users.findFirst({
      where: { email, role: Role.CUSTOMER },
      include: {
        subscription: {
          where: {
            active: true
          }
        }
      }
    });

    if (!user) throw new NotFoundException('Este usuário não existe');

    if (!comparePassword(password, user.password))
      throw new UnauthorizedException('Credenciais incorretas');

		return this.jwtToken({ 
			id: user.id,
			external_id: user.external_id,
			name: user.name,
			email: user.email,
			role: user.role,
      plan_status: user.subscription.length > 0 ? user.subscription[0].plan_status : null
		})
	}

  async loginAdmin({ email, password }: AuthLoginInput): Promise<any> {
    const user = await this.prisma.users.findFirst({
      where: { email, role: Role.ADMIN },
    });

    if (!user) throw new NotFoundException('Este usuário não existe');

    if (!comparePassword(password, user.password))
      throw new UnauthorizedException('Credenciais incorretas');

    return this.jwtToken(user);
  }

  async getAccount(access_token: string): Promise<any> {
    //console.log(access_token)
    const user = this.jwtService.decode(access_token, { json: true });
    return user;
  }

  async resetPassword(email: string): Promise<any> {
    const user = await this.prisma.users.findFirst({ where: { email } });
    if (!user) throw new NotFoundException('Este usuário não existe');

    const secret = process.env.JWT_SECRET + user.password;
    const payload = {
      email: user.email,
      id: user.id,
    };

    const token = this.jwtService.sign(payload, {
      secret: secret,
      expiresIn: '15m',
    });
    const link = `${process.env.WEB_LINK}/auth/new-password/${user.id}/${token}`;

    const mail = await this.mailerService.sendMail({
      to: user.email, // list of receivers
      from: 'BrcLightning@acelerabit.com', // sender address
      subject: 'Recuperação de senha - BRC Lightning', // Subject line
      text: `teste`, // plaintext body
      html: `<p>Para trocar sua senha clique <a href='${link}'>Aqui</a></p>`, // HTML body content
      //template: '',
      //context: { link },
    });

    return 'O link para redefinir a senha foi enviado para o seu email.';
  }

  async newPassword(data: AuthNewPasswordInput): Promise<any> {
    let { token, id } = data;

    const user = await this.prisma.users.findFirst({ where: { id } });
    if (!user) throw new NotFoundException('Este usuário não existe');

    const secret = process.env.JWT_SECRET + user.password;
    try {
      const decoded = this.jwtService.verify(token, { secret: secret });
      if (!(decoded.email == user.email)) {
        throw new HttpException(`Token inválido`, HttpStatus.UNAUTHORIZED);
      }
    } catch (error) {
      if (error.name == 'TokenExpiredError') {
        throw new HttpException(
          `O token expirou, tente novamente`,
          HttpStatus.BAD_REQUEST,
        );
      }
      throw new HttpException(
        `Houve um erro durante a validação do token`,
        HttpStatus.BAD_REQUEST,
      );
    }

    const password = hashPassword(data.password);
    return await this.prisma.users.update({
      where: { id },
      data: { password },
    });
  }
}
