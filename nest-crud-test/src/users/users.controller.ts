import { UsersService } from './users.service';
import { User } from './user';
import { Controller, Get, Param, Post, Put, Body, Delete } from '@nestjs/common';

@Controller('users')
export class UsersController {
    constructor(
        private usersService: UsersService
    ) {}

    @Get()
    async findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: number): Promise<User> {
        return this.usersService.findById(id);
    }

    @Post()
    async create(@Body() user: User): Promise<User> {
        return this.usersService.create(user);
    }

    @Put(':id')
    async update(@Body() user: User, @Param('id') id: number): Promise<User | {error: String}> {
        return this.usersService.update(id, user);
    }

    @Delete(':id')
    async delete(@Param('id') id: number): Promise<void> {
        this.usersService.delete(id);
    }
}
