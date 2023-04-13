import { Module } from '@nestjs/common';
import { SpdasService } from './spdas.service';
import { SpdasController } from './spdas.controller';
import { PrismaService } from 'src/common/database/prisma.service';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [SpdasController],
  imports: [PrismaClient],
  providers: [SpdasService, PrismaService]
})
export class SpdasModule {}
