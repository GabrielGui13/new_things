import { Module } from '@nestjs/common';
import { DimensioningTypesService } from './dimensioning-types.service';
import { DimensioningTypesController } from './dimensioning-types.controller';
import { PrismaService } from 'src/common/database/prisma.service';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [DimensioningTypesController],
  imports: [PrismaClient],
  providers: [DimensioningTypesService, PrismaService]
})
export class DimensioningTypesModule {}
