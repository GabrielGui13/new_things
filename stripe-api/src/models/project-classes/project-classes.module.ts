import { Module } from '@nestjs/common';
import { ProjectClassesService } from './project-classes.service';
import { ProjectClassesController } from './project-classes.controller';
import { PrismaClient } from '@prisma/client';
import { PrismaService } from 'src/common/database/prisma.service';

@Module({
  controllers: [ProjectClassesController],
  imports: [PrismaClient],
  providers: [ProjectClassesService, PrismaService]
})
export class ProjectClassesModule {}
