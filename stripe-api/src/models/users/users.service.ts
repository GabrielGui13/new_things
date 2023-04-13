import { BadRequestException, Injectable, NotFoundException, UseGuards } from '@nestjs/common';
import { UserPlanStatus, Users } from '@prisma/client';
import { PrismaService } from 'src/common/database/prisma.service';
import { CreateUserInput } from './entity/create-user.input';
import { hashPassword } from '../../common/helpers/crypto';
import { UpdateUserInput } from './entity/update-user.input';
import { PaginationUserInput } from './entity/pagination-user.input';
import { PaymentService } from 'src/models/payment/payment.service';
import { SubscriptionsService } from '../subscriptions/subscriptions.service';

@Injectable()
export class UsersService {
	constructor(
		private prisma: PrismaService,
		private paymentService: PaymentService,
		private subscriptionService: SubscriptionsService,
	) {}

	async findAll({ limit, page, name, role }: PaginationUserInput): Promise<{data: Users[], count: number}> {
		const count = await (await this.prisma.users.findMany({
			where: {
				name: name.trim() !== '' ? { contains: name, mode: 'insensitive' } : {},
				role
			}
		})).length
		
		const data = await this.prisma.users.findMany({
			take: limit,
			skip: page * limit - limit,
			where: {
				name: name.trim() !== '' ? { contains: name, mode: 'insensitive' } : {},
				role
			},
			include: {
				projects: true,
				subscription: {
					where: {
						active: true
					},
					include: {
						plan: true,
					}
				}
			}
		})

		return {
			data,
			count
		}
	}

	async findById(id: string): Promise<Users> {
		const user = await this.prisma.users.findFirst({ 
			where: { 
				id 
			},
			include: {
				projects: true,
				subscription: {
					where: {
						active: true
					},
					include: {
						plan: true,
					}
				}
			}
		})

		if (!user) throw new NotFoundException('Este usuário não existe')

		return user
	}

	async create(data: CreateUserInput): Promise<Users | any> {
		const findUser = await this.prisma.users.findFirst({
			where: {
				email: data.email
			}
		})

		if (findUser) throw new BadRequestException('Este usuário já existe')

		if (data.password !== data.confirmationPassword) throw new BadRequestException('As senhas estão diferentes')

		delete data.confirmationPassword
		const password = hashPassword(data.password)
		data.password = password

		// const { plan_id, ...rest } = data

		const freePlanBool = data.freePlan
		delete data.freePlan

		const createUser = await this.prisma.users.create({
			data: {
				...data,
			}
		})

		const externalId = await this.paymentService.createCustomer({
			name: createUser.name,
			email: createUser.email,
			phone: createUser.phone
		})

		if (freePlanBool) {
			const freePlan = await this.prisma.plans.findFirst({
				where: {
					value: 0,
					active: true
				}
			})

			if (!freePlan) throw new NotFoundException('Plano grátis não encontrado')

			const createdSubscription = await this.subscriptionService.create({
				plan_id: freePlan.id,
				plan_status: UserPlanStatus.PAGO,
				value: freePlan.value,
				user_id: createUser.id,
			})

			await this.subscriptionService.confirmSubscription(createUser.id, true)
		}


		return await this.prisma.users.update({
			where: {
				id: createUser.id
			},
			data: {
				external_id: externalId
			}
		})
	}

	async update(id: string, data: UpdateUserInput): Promise<Users> {
		const findUser = await this.prisma.users.findFirst({
			where: {
				id
			}
		})

		if (!findUser) throw new NotFoundException('Este usuário não existe')

		return await this.prisma.users.update({
			where: { id },
			data
		})
	}

	async delete(id: string): Promise<Users> {
		const findUser = await this.prisma.users.findFirst({
			where: {
				id
			}
		})

		if (!findUser) throw new NotFoundException('Este usuário não existe')

		await this.prisma.projects.deleteMany({
			where: {
				user_id: id
			}
		})

		await this.prisma.payment.deleteMany({
			where: {
				user_id: id
			}
		})

		await this.prisma.subscription.deleteMany({
			where: {
				user_id: id
			}
		})

		return await this.prisma.users.delete({
			where: {
				id
			}
		})
	}
}
