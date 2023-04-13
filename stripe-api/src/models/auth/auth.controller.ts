/*
https://docs.nestjs.com/controllers#controllers
*/

import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
  Headers,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/common/decorators/auth.decorator';
import { User } from '../users/interface/user.interface';
import { AuthService } from './auth.service';
import AuthResetPasswordInput from './dto/reset-password.input';
import AuthLoginInput from './dto/login.input';
import AuthNewPasswordInput from './dto/new-password.input';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() data: AuthLoginInput): Promise<String | null> {
    return await this.authService.login(data);
  }

  @Post('login-admin')
  async loginAdmin(@Body() data: AuthLoginInput): Promise<String | null> {
    return await this.authService.loginAdmin(data);
  }

  @Auth()
  @Get('account')
  async getAccount(@Headers() headers): Promise<User> {
    return await this.authService.getAccount(
      headers.authorization.split(' ')[1],
    );
  }

  @Post('reset-password')
  async resetPassword(@Body() data: AuthResetPasswordInput): Promise<String | null> {
    return this.authService.resetPassword(data.email);
  }

  @Post('new-password')
  async newPassword(@Body() data: AuthNewPasswordInput): Promise<String | null> {
    return this.authService.newPassword(data);
}

  //@Get('reset-password')
  //async resetPassword()
}
