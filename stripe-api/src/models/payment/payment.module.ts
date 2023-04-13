import { Module } from '@nestjs/common';
import { PaymentController } from './payment.controller';
import { PaymentService } from './payment.service';
import { PrismaService } from '../../common/database/prisma.service';
import { PrismaClient } from '@prisma/client';
import { SubscriptionsService } from 'src/models/subscriptions/subscriptions.service';
import { SubscriptionsModule } from 'src/models/subscriptions/subscriptions.module';
import { StripeWebhookService } from './webhook.service';

@Module({
  controllers: [PaymentController],
  imports: [PrismaClient],
  providers: [PaymentService, PrismaService, SubscriptionsService, StripeWebhookService],
})
export class PaymentModule {}
