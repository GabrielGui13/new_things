import { Injectable } from '@nestjs/common';
import { Structure } from '@prisma/client';
import { PrismaService } from 'src/common/database/prisma.service';
import { CreateStructureInput } from './dto/create-structure.input';
import { PaginationStructureInput } from './entities/pagination-structure.input';

@Injectable()
export class StructuresService {
  constructor(
    private prisma: PrismaService
  ) {}
  
  async create(data: CreateStructureInput): Promise<Structure> {
    return await this.prisma.structure.create({
      data: {
        ...data,
      }
    })
  }

  async findAll({ limit, page, project_id}: PaginationStructureInput): Promise<{data: Structure[], count: number}> {
    const count = await (await this.prisma.structure.findMany({
      where: {
        project_id: project_id? project_id : {},
      }
    })).length

    const data = await this.prisma.structure.findMany({
      orderBy: {
        number: 'desc',
      },
      take: limit,
      skip: page * limit - limit || 0,
      where: {
        project_id: project_id? project_id : {},
      }
    })

    return {data, count};
  }

  findOne(id: number) {
    return `This action returns a #${id} structure`;
  }

  remove(id: number) {
    return `This action removes a #${id} structure`;
  }
}
