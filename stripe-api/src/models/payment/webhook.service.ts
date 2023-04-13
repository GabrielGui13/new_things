import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException, UseGuards } from '@nestjs/common';
import { UserPlanStatus, Users } from '@prisma/client';
import { PrismaService } from 'src/common/database/prisma.service';
import * as moment from 'moment';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
	apiVersion: '2022-11-15'
})

@Injectable()
export class StripeWebhookService {
	constructor(
		private prisma: PrismaService,
		// private subscriptionService: SubscriptionsService,
	) {}

	async webhook(data: any): Promise<any> {
		// console.log(data);

		const event = data;

		// Handle the event
		switch (event.type) {
			case 'invoice.upcoming': // alguns dias antes da fatura vencer
				break;
			case 'invoice.created': // no dia do vencimento da fatura
				const invoice = event.data.object;

				const customer = await this.prisma.users.findFirst({
					where: {
						external_id: invoice.customer
					},
					include: {
						payment: true,
						subscription: {
							where: {
								active: true
							}
						}
					}
				})

				if (!customer) throw new NotFoundException('Cliente não encontrado')

				if (customer.payment.length == 0) return;

				await this.prisma.payment.create({
					data: {
						external_id: invoice.id,
						value: Number(invoice['amount_due']) / 100,
						subscription: {
							connect: {
								id: customer.subscription[0].id || ''
							}
						},
						user: {
							connect: {
								id: customer.id
							}
						}
					}
				})

				break;
		case 'invoice.paid': // no pagamento da fatura
				const paidInvoice = event.data.object;

				const findPaidInvoice = await this.prisma.payment.findFirst({
					where: {
						external_id: paidInvoice.id
					}
				})

				if (!findPaidInvoice) throw new NotFoundException('Erro ao finalizar pagamento')
				
				const updatedPayment = await this.prisma.payment.update({
					where: {
						external_id: paidInvoice.id
					},
					data: {
						payment_date: moment().toISOString(),
						completed: true,
					}
				})

				await this.prisma.subscription.update({
					where: {
						id: updatedPayment.subscription_id
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
		
				break;
			case 'invoice.payment_failed': // no dia do vencimento da fatura
				const failedInvoice = event.data.object;

				const findCreatedInvoice = await this.prisma.payment.findFirst({
					where: {
						external_id: failedInvoice.id
					}
				})

				if (!findCreatedInvoice) throw new NotFoundException('Pagamento não criado')
				
				await this.prisma.subscription.update({
					where: {
						id: findCreatedInvoice.subscription_id
					},
					data: {
						active: false,
						completed: true,
						plan_status: UserPlanStatus.ATRASADO
					},
					include: {
						payment: {
							orderBy: {
								created_at: 'desc'
							}
						}
					}
				})

				break;
			default:
				console.log(`Unhandled event type ${event.type}`);
		}
	}
}
