import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { LocalStrategy } from './local.strategy';
import { UsersService } from 'src/users/users.service';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [UsersModule], //to use UsersService
  controllers: [AuthController],
  providers: [AuthService, LocalStrategy, JwtStrategy],
  exports: [UsersService] //tudo que precisa usar externamente, deve colocar aqui dentro
})
export class AuthModule {}
