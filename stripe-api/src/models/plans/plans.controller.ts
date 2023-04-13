import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Plans, Projects, Role, Users } from '@prisma/client';
import { PlansService } from './plans.service'
import { CreatePlanInput } from './entity/create-plan.input';
import { UpdatePlanInput } from './entity/update-plan.input';
import { PaginationPlanInput } from './entity/pagination-plan.input';
import { Auth } from 'src/common/decorators/auth.decorator';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('plans')
@Controller('plans')
export class PlansController {
	constructor(private plansService: PlansService) {}

	@Put()
	// @Auth(Role.ADMIN, Role.CUSTOMER)
	async findAll(@Body() data: PaginationPlanInput): Promise<{data: Plans[], count: number}> {
		return await this.plansService.findAll(data)
	}

	// @Auth(Role.ADMIN, Role.CUSTOMER)
	@Get(':id')
	async findById(@Param('id') id: string): Promise<Plans> {
		return await this.plansService.findById(id)
	}

	// @Auth(Role.ADMIN, Role.CUSTOMER)
	@Post()
	async create(@Body() data: CreatePlanInput): Promise<Plans> {
		return await this.plansService.create(data)
	}
	
	@Auth(Role.ADMIN, Role.CUSTOMER)
	@Put(':id')
	async update(@Param('id') id: string, @Body() data: UpdatePlanInput): Promise<Plans> {
		return await this.plansService.update(id, data)
	}

	@Auth(Role.ADMIN)
	@Delete(':id')
	async delete(@Param('id') id: string): Promise<Plans> {
		return await this.plansService.delete(id)
	}
}
