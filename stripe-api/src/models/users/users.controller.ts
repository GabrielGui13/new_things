import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Role, Users } from '@prisma/client';
import { UsersService } from './users.service'
import { CreateUserInput } from './entity/create-user.input';
import { UpdateUserInput } from './entity/update-user.input';
import { PaginationUserInput } from './entity/pagination-user.input';
import { Auth } from 'src/common/decorators/auth.decorator';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UsersController {
	constructor(private usersService: UsersService) {}

	@Put()
	@Auth(Role.ADMIN)
	async findAll(@Body() data: PaginationUserInput): Promise<{data: Users[], count: number}> {
		return await this.usersService.findAll(data)
	}

	@Auth(Role.ADMIN, Role.CUSTOMER)
	@Get(':id')
	async findById(@Param('id') id: string): Promise<Users> {
		return await this.usersService.findById(id)
	}

	@Post()
	async create(@Body() data: CreateUserInput): Promise<Users> {
		return await this.usersService.create(data)
	}
	
	@Auth(Role.ADMIN, Role.CUSTOMER)
	@Put(':id')
	async update(@Param('id') id: string, @Body() data: UpdateUserInput): Promise<Users> {
		return await this.usersService.update(id, data)
	}

	@Auth(Role.ADMIN)
	@Delete(':id')
	async delete(@Param('id') id: string): Promise<Users> {
		return await this.usersService.delete(id)
	}
}
