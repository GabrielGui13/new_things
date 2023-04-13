import { Module } from '@nestjs/common';
import { SpdaTypeService } from './spda-type.service';
import { SpdaTypeController } from './spda-type.controller';
import { PrismaService } from 'src/common/database/prisma.service';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [SpdaTypeController],
  imports: [PrismaClient],
  providers: [SpdaTypeService, PrismaService]
})
export class SpdaTypeModule {}
