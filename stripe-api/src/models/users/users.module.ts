import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { PrismaService } from '../../common/database/prisma.service';
import { PrismaClient } from '@prisma/client';
import { PaymentService } from 'src/models/payment/payment.service';
import { SubscriptionsService } from '../subscriptions/subscriptions.service';

@Module({
  controllers: [UsersController],
  imports: [PrismaClient],
  providers: [UsersService, PrismaService, PaymentService, SubscriptionsService],
})
export class UsersModule {}
