import { UsersService } from './users.service';
//import { User } from './user';
import { User } from '@prisma/client';
import { Controller, Get, Param, Post, Put, Body, Delete, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/shared/jwt-auth.guard';

@Controller('users')
export class UsersController {
    constructor(
        private usersService: UsersService
    ) {}

    //@UseGuards(JwtAuthGuard)
    @Get()
    async findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }

/*     @UseGuards(JwtAuthGuard)
    @Get(':id')
    async findById(@Param('id') id: number): Promise<User> {
        return this.usersService.findById(id);
    } */

    @Post()
    async create(@Body() user: User): Promise<User> {
        return this.usersService.create(user);
    }

/*     @Put(':id')
    async update(@Body() user: User, @Param('id') id: number): Promise<User | {error: String}> {
        return this.usersService.update(id, user);
    } */

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<void> {
        this.usersService.delete(id);
    }
}
