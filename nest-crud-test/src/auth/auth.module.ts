import { AuthService } from './auth.service';
import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [UsersModule], //to use UsersService
  controllers: [],
  providers: [AuthService],
})
export class AuthModule {}
