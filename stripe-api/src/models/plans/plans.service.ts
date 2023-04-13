import { BadRequestException, Injectable, NotFoundException, UseGuards } from '@nestjs/common';
import { Plans, Users } from '@prisma/client';
import { PrismaService } from 'src/common/database/prisma.service';
import { CreatePlanInput } from './entity/create-plan.input';
import { hashPassword } from '../../common/helpers/crypto';
import { UpdatePlanInput } from './entity/update-plan.input';
import { PaginationPlanInput } from './entity/pagination-plan.input';
import { PaymentService } from 'src/models/payment/payment.service';

@Injectable()
export class PlansService {
	constructor(
		private prisma: PrismaService,
		private paymentService: PaymentService,
	) {}

	async findAll({ limit, page, name, active }: PaginationPlanInput): Promise<{data: Plans[], count: number}> {
		const count = await (await this.prisma.plans.findMany({
			where: {
				name: name && name.trim() !== '' ? { contains: name, mode: 'insensitive' } : {},
				// active: Boolean(active)
			}
		})).length
		
		const data = await this.prisma.plans.findMany({
			take: limit,
			skip: page * limit - limit || 0,
			where: {
				name: name && name.trim() !== '' ? { contains: name, mode: 'insensitive' } : {},
				// active: Boolean(active)
			},
			orderBy: {
				value: 'asc'
			},
			// include: {
			// 	users: true,
			// } 
		})

		return {
			data,
			count
		}
	}

	async findById(id: string): Promise<Plans> {
		const plan = await this.prisma.plans.findFirst({ 
			where: { 
				id 
			},
			// include: {
			// 	users: true,
			// } 
		})

		if (!plan) throw new NotFoundException('Este plano não existe')

		return plan
	}

	async create(data: CreatePlanInput): Promise<Plans> {
		const findPlan = await this.prisma.plans.findFirst({
			where: {
				name: data.name.trim() !== '' ? { contains: data.name, mode: 'insensitive' } : {},
			}
		})

		if (findPlan) throw new BadRequestException('Este plano já existe')

		const createPlan = await this.prisma.plans.create({ 
			data: {
				...data,
				public: !(data.value == 0)
			}
		})

		const externalId = await this.paymentService.createProduct({
			name: createPlan.name,
			value: createPlan.value,
			duration_months: createPlan.duration_months
		})

		return await this.prisma.plans.update({
			where: {
				id: createPlan.id,
			},
			data: {
				external_id: externalId,
			}
		})
	}

	async update(id: string, data: UpdatePlanInput): Promise<Plans> {
		const findPlan = await this.prisma.plans.findFirst({
			where: {
				id
			}
		})

		if (!findPlan) throw new NotFoundException('Este plano não existe')

		const updatedPlan = await this.prisma.plans.update({
			where: { id },
			data
		})

		return updatedPlan
	}

	async delete(id: string): Promise<Plans> {
		const findPlan = await this.prisma.plans.findFirst({
			where: {
				id
			},
			include: {
				subscription: true
			}
		})

		if (!findPlan) throw new NotFoundException('Este plano não existe')

		if (findPlan.subscription.length !== 0) throw new BadRequestException('Não é possível excluir! O plano já está vinculado a uma assinatura!')

		const deletedPlan = await this.prisma.plans.delete({
			where: {
				id
			}
		})

		if (!deletedPlan) throw new BadRequestException('Algo deu errado na exclusão do plano')

		await this.paymentService.deleteProduct(findPlan.external_id)

		return deletedPlan
	}
}
