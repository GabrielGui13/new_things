import { BadRequestException, Injectable, NotFoundException, UseGuards } from '@nestjs/common';
import { Projects, Users } from '@prisma/client';
import { PrismaService } from 'src/common/database/prisma.service';
import { CreateProjectInput } from './entity/create-project.input';
import { hashPassword } from '../../common/helpers/crypto';
import { UpdateProjectInput } from './entity/update-project.input';
import { PaginationProjectInput } from './entity/pagination-project.input';

@Injectable()
export class ProjectsService {
	constructor(
		private prisma: PrismaService
	) {}

	async findAll({ limit, page, name, user_id }: PaginationProjectInput): Promise<{data: Projects[], count: number}> {
		const count = await (await this.prisma.projects.findMany({
			where: {
				name: name.trim() !== '' ? { contains: name, mode: 'insensitive' } : {},
				user_id: user_id
			}
		})).length
		
		const data = await this.prisma.projects.findMany({
			take: limit,
			skip: page * limit - limit || 0,
			where: {
				name: name.trim() !== '' ? { contains: name, mode: 'insensitive' } : {},
				user_id: user_id
			},
			include: {
				spdas: true
			}
		})

		return {
			data,
			count
		}
	}

	async countByUser(user_id: string): Promise<number>{
		const count = await (await this.prisma.projects.findMany({
			where: {
				user_id: user_id
			}
		})).length

		return count
	}

	async findById(id: string): Promise<Projects> {
		const project = await this.prisma.projects.findFirst({ where: { id } })

		if (!project) throw new NotFoundException('Este projeto não existe')

		return project
	}

	async create(data: CreateProjectInput): Promise<Projects> {
		const findProject = await this.prisma.projects.findFirst({
			where: {
				name: data.name,
				user_id: data.user_id,
			}
		})

		if (findProject) throw new BadRequestException('Este projeto já existe')

		return await this.prisma.projects.create({ 
			data: {
				...data,
			}
		})
	}

	async update(id: string, data: UpdateProjectInput): Promise<Projects> {
		const findProject = await this.prisma.projects.findFirst({
			where: {
				id
			}
		})

		if (!findProject) throw new NotFoundException('Este projeto não existe')

		return await this.prisma.projects.update({
			where: { id },
			data
		})
	}

	async delete(id: string): Promise<Projects> {
		const findProject = await this.prisma.projects.findFirst({
			where: {
				id
			}
		})

		if (!findProject) throw new NotFoundException('Este projeto não existe')

		return await this.prisma.projects.delete({
			where: {
				id
			}
		})
	}
}
