import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Projects, Role, Users } from '@prisma/client';
import { ProjectsService } from './projects.service'
import { CreateProjectInput } from './entity/create-project.input';
import { UpdateProjectInput } from './entity/update-project.input';
import { PaginationProjectInput } from './entity/pagination-project.input';
import { Auth } from 'src/common/decorators/auth.decorator';
import { ApiTags } from '@nestjs/swagger';
import { get } from 'http';

@ApiTags('projects')
@Controller('projects')
export class ProjectsController {
	constructor(private projectsService: ProjectsService) {}

	@Put()
	@Auth(Role.ADMIN, Role.CUSTOMER)
	async findAll(@Body() data: PaginationProjectInput): Promise<{data: Projects[], count: number}> {
		return await this.projectsService.findAll(data)
	}

	@Auth(Role.ADMIN, Role.CUSTOMER)
	@Get(':id')
	async findById(@Param('id') id: string): Promise<Projects> {
		return await this.projectsService.findById(id)
	}

	@Auth(Role.ADMIN, Role.CUSTOMER)
	@Get('count/:id')
	async countByUser(@Param('id') id: string): Promise<number> {
		return await this.projectsService.countByUser(id)
	}

	@Auth(Role.ADMIN, Role.CUSTOMER)
	@Post()
	async create(@Body() data: CreateProjectInput): Promise<Projects> {
		return await this.projectsService.create(data)
	}
	
	@Auth(Role.ADMIN, Role.CUSTOMER)
	@Put(':id')
	async update(@Param('id') id: string, @Body() data: UpdateProjectInput): Promise<Projects> {
		return await this.projectsService.update(id, data)
	}

	@Auth(Role.ADMIN)
	@Delete(':id')
	async delete(@Param('id') id: string): Promise<Projects> {
		return await this.projectsService.delete(id)
	}
}
