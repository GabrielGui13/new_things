import { Body, Controller, Delete, Get, Headers, Param, Post, Put } from '@nestjs/common';
import { PaymentService } from './payment.service'
import { ApiTags } from '@nestjs/swagger';
import { CreateSubscriptionInput } from './entity/create-subscription.input';
import { StripeWebhookService } from './webhook.service';
import { Auth } from 'src/common/decorators/auth.decorator';

@ApiTags('payment')
@Controller('payment')
export class PaymentController {
	constructor(
		private paymentService: PaymentService,
		private stripeWebhookService: StripeWebhookService,
	) {}

	// @Auth(Role.ADMIN)
	@Post('create-subscription')
	async createSubscription(@Body() data: CreateSubscriptionInput): Promise<any> {
		return await this.paymentService.createSubscription(data)
	}

	@Auth()
	@Post('cancel-subscription/:id')
	async cancelSubscription(@Param('id') id: string): Promise<any> {
		return await this.paymentService.cancelSubscription(id)
	}

	@Get('customer/:id')
	async getCustomerData(@Param('id') id: string): Promise<any> {
		return await this.paymentService.getCustomerData(id);
	}

	@Post('stripe-webhooks')
	async webhook(@Body() data: any, @Headers() headers: any): Promise<any> {
		return await this.stripeWebhookService.webhook(data);
	}
}
