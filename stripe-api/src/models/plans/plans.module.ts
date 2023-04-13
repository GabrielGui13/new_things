import { Module } from '@nestjs/common';
import { PlansController } from './plans.controller';
import { PlansService } from './plans.service';
import { PrismaService } from '../../common/database/prisma.service';
import { PrismaClient } from '@prisma/client';
import { PaymentService } from 'src/models/payment/payment.service';

@Module({
  controllers: [PlansController],
  imports: [PrismaClient],
  providers: [PlansService, PrismaService, PaymentService],
})
export class PlansModule {}
