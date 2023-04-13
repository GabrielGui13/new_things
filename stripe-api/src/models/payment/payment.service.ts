import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException, UseGuards } from '@nestjs/common';
import { UserPlanStatus, Users } from '@prisma/client';
import { PrismaService } from 'src/common/database/prisma.service';
import { CreateCustomerInput } from './entity/create-customer.input';
import { hashPassword } from '../../common/helpers/crypto';
import Stripe from 'stripe';
import { CreatePlanInput } from './entity/create-plan.input';
import { CreateSubscriptionInput } from './entity/create-subscription.input';
import { SubscriptionsService } from 'src/models/subscriptions/subscriptions.service';
import { Subscription } from '@prisma/client';
import * as moment from 'moment';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
	apiVersion: '2022-11-15'
})

@Injectable()
export class PaymentService {
	constructor(
		private prisma: PrismaService,
		// private subscriptionService: SubscriptionsService,
	) {}

	async createCustomer(data: CreateCustomerInput): Promise<string> {
		const customer = await stripe.customers.create({
			name: data.name,
			email: data.email,
			phone: data.phone,
		})

		return customer.id
	}

	async getCustomerData(id: string): Promise<any> {
		const stripeCustomer = await stripe.customers.retrieve(id)

		const payments = await stripe.paymentMethods.list({
			customer: stripeCustomer.id,
			expand: ['data.card', 'data.billing_details'],
		})

		const customer = await this.prisma.users.findFirst({
			where: {
				external_id: id
			},
			include: {
				payment: {
					include: {
						subscription: true
					}
				},
				subscription: {
					where: {
						active: true
					},
					orderBy: {
						active: 'asc',
					},
					include: {
						plan: true,
						payment: true,	
					}
				}
			}
		})

		return {
			stripeCustomer,
			customer,
			paymentMethods: {
				...payments.data
			}
		}
	}

	// async getInvoices(id: string)

	async createProduct(data: CreatePlanInput): Promise<string> {
		const product = await stripe.products.create({
			name: data.name,
			default_price_data: {
				currency: 'BRL',
				unit_amount: data.value * 100,
				recurring: {
					interval: 'month',
					interval_count: data.duration_months
				}
			}
		})

		return product.id
	}

	// async updateProduct(id: string, data: CreatePlanInput): Promise<string> {
	// 	const product = await stripe.products.update(id, {
	// 		name: data.name,
	// 	})

	// 	product.

	// 	const price = await stripe.prices.update(product)

	// 	return product.id
	// }

	async deleteProduct(id: string): Promise<boolean> {
		try {
			const deletedProduct = await stripe.products.del(id)

			return Boolean(deletedProduct) 
		} 
		catch (error) {
			throw new BadRequestException(error.message)
		}
	}

	async createSubscription(data: CreateSubscriptionInput): Promise<any> {
		const product = await stripe.products.retrieve(data.product_id)

		const subscription = await stripe.subscriptions.create({
			customer: data.customer_id,
			items: [{
				price: product.default_price.toString()
			}],
			// trial_period_days: 7,
			payment_behavior: 'default_incomplete',
			payment_settings: { save_default_payment_method: 'on_subscription' },
			expand: ['latest_invoice.payment_intent'],
		})

		const userID: string = data.user_id
		const planID: string = data.plan_id

		await this.prisma.subscription.create({
			data: {
				external_id: subscription.id,
				value: Number(subscription.latest_invoice['payment_intent'].amount) / 100,
				user_id: userID,
				plan_id: planID,
				expiration: moment().date().toString(),
				payment: {
					create: {
						external_id: subscription.latest_invoice['id'],
						value: Number(subscription.latest_invoice['amount_due']) / 100,
						user_id: userID,
					}
				}
			},
			include: {
				user: true,
				plan: true,
				payment: true,
			}
		})

		return subscription.latest_invoice['payment_intent'].client_secret
	}

	async cancelSubscription(subscriptionId: string): Promise<void> {
		try {
			const subscription = await stripe.subscriptions.retrieve(subscriptionId);

			if (subscription.status === 'canceled') throw new BadRequestException('Subscription is already canceled.');

			await stripe.subscriptions.cancel(subscriptionId);

			await this.prisma.subscription.update({
				where: {
					external_id: subscriptionId
				},
				data: {
					active: false,
					plan_status: UserPlanStatus.CANCELADO
				}
			})

		} catch (error) {
			throw new InternalServerErrorException(error.message, error);
		}
	}
}
