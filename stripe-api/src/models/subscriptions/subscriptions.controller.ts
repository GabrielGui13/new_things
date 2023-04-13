import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Plans, Projects, Role, Subscription, Users } from '@prisma/client';
import { SubscriptionsService } from './subscriptions.service'
import { CreateSubscriptionInput } from './entity/create-subscription.input';
import { UpdatePlanInput } from './entity/update-plan.input';
import { PaginationPlanInput } from './entity/pagination-plan.input';
import { Auth } from 'src/common/decorators/auth.decorator';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('subscription')
@Controller('subscription')
export class SubscriptionsController {
	constructor(private subscriptionsService: SubscriptionsService) {}

	// @Auth(Role.ADMIN, Role.CUSTOMER)
	@Post('confirm/:id')
	async confirmSubscription(@Param('id') id: string, @Param('free') free?: boolean): Promise<Subscription> {
		return await this.subscriptionsService.confirmSubscription(id, free)
	}
	
	// @Auth(Role.ADMIN, Role.CUSTOMER)
	// @Put(':id')
	// async update(@Param('id') id: string, @Body() data: UpdatePlanInput): Promise<Plans> {
	// 	return await this.plansService.update(id, data)
	// }

	// @Auth(Role.ADMIN)
	// @Delete(':id')
	// async delete(@Param('id') id: string): Promise<Plans> {
	// 	return await this.plansService.delete(id)
	// }
}
