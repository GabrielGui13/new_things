import { BadRequestException, Injectable, NotFoundException, UseGuards } from '@nestjs/common';
import { Plans, Subscription, UserPlanStatus, Users } from '@prisma/client';
import { PrismaService } from 'src/common/database/prisma.service';
import { CreateSubscriptionInput } from './entity/create-subscription.input';
import { hashPassword } from '../../common/helpers/crypto';
import * as moment from 'moment';
import { PaymentService } from '../payment/payment.service';

@Injectable()
export class SubscriptionsService {
	constructor(
		private prisma: PrismaService,
		private paymentService: PaymentService,
	) {}

	async create(data: CreateSubscriptionInput): Promise<Subscription> {
		const findSubscription = await this.prisma.subscription.findFirst({
			where: {
				user: {
					id: data.user_id
				},
				plan: {
					id: data.plan_id
				}
			}
		})

		if (findSubscription) throw new BadRequestException('Esta assinatura já está ativa!')

		return await this.prisma.subscription.create({ data })
	}

	async confirmSubscription(id: string, free: boolean): Promise<Subscription> {
		const findUser = await this.prisma.users.findFirst({
			where: {
				id
			},
			include: {
				subscription: {
					where: {
						active: false,
					},
					orderBy: {
						created_at: 'desc'
					}
				}
			}
		})

		if (!findUser) throw new BadRequestException('Usuário não encontrado')

		const subscription = await this.prisma.subscription.update({
			where: {
				id: findUser.subscription[0].id
			},
			data: {
				active: true,
				completed: true,
				plan_status: UserPlanStatus.PAGO
			},
			include: {
				payment: {
					orderBy: {
						created_at: 'desc'
					}
				}
			}
		})

		await this.prisma.payment.update({
			where: {
				id: subscription.payment[0].id
			},
			data: {
				payment_date: moment().toISOString(),
				completed: true,
			}
		})

		return subscription
	}

	// async update(id: string, data: UpdatePlanInput): Promise<Plans> {
	// 	const findPlan = await this.prisma.plans.findFirst({
	// 		where: {
	// 			id
	// 		}
	// 	})

	// 	if (!findPlan) throw new NotFoundException('Este plano não existe')

	// 	return await this.prisma.plans.update({
	// 		where: { id },
	// 		data
	// 	})
	// }

	// async delete(id: string): Promise<Plans> {
	// 	const findPlan = await this.prisma.plans.findFirst({
	// 		where: {
	// 			id
	// 		}
	// 	})

	// 	if (!findPlan) throw new NotFoundException('Este plano não existe')

	// 	return await this.prisma.plans.delete({
	// 		where: {
	// 			id
	// 		}
	// 	})
	// }
}
