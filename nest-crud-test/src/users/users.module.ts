import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService] //need to export to make it global usable
})
export class UsersModule {}
