import { Module } from '@nestjs/common';
import { StructuresService } from './structures.service';
import { StructuresController } from './structures.controller';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from 'src/common/database/prisma.service';

@Module({
  controllers: [StructuresController],
  imports: [PrismaClient],
  providers: [StructuresService, PrismaService]
})
export class StructuresModule {}
