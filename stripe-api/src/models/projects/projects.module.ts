import { Module } from '@nestjs/common';
import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';
import { PrismaService } from '../../common/database/prisma.service';
import { PrismaClient } from '@prisma/client';

@Module({
  controllers: [ProjectsController],
  imports: [PrismaClient],
  providers: [ProjectsService, PrismaService],
})
export class ProjectsModule {}
