import { UsersService } from './users.service';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { UsersResolver } from './users.resolver';

@Module({
    imports: [],
    controllers: [],
    providers: [UsersResolver, UsersService],
})
export class UsersModule {}
