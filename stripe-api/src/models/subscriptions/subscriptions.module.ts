import { Module } from '@nestjs/common';
import { SubscriptionsController } from './subscriptions.controller';
import { SubscriptionsService } from './subscriptions.service';
import { PrismaService } from '../../common/database/prisma.service';
import { PrismaClient } from '@prisma/client';
import { PaymentService } from 'src/models/payment/payment.service';

@Module({
  controllers: [SubscriptionsController],
  imports: [PrismaClient],
  exports: [SubscriptionsService, SubscriptionsModule],
  providers: [SubscriptionsService, PrismaService, PaymentService],
})
export class SubscriptionsModule {}
