import { Module } from '@nestjs/common';
import { CalcsService } from './calcs.service';
import { CalcsController } from './calcs.controller';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from 'src/common/database/prisma.service';

@Module({
  controllers: [CalcsController],
  imports: [PrismaClient],
  providers: [CalcsService, PrismaService]
})
export class CalcsModule {}
