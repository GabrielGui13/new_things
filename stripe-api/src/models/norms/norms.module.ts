import { Module } from '@nestjs/common';
import { NormsService } from './norms.service';
import { NormsController } from './norms.controller';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from 'src/common/database/prisma.service';

@Module({
  controllers: [NormsController],
  imports: [PrismaClient],
  providers: [NormsService, PrismaService],
})
export class NormsModule {}
