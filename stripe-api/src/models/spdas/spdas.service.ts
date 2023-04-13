import { Injectable } from '@nestjs/common';
import { Spda } from '@prisma/client';
import { PrismaService } from 'src/common/database/prisma.service';
import { CreateSpdaInput } from './dto/create-spda.input';
import { PaginationSpdaInput } from './entities/pagination-spda.input';

@Injectable()
export class SpdasService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateSpdaInput): Promise<Spda> {
    return await this.prisma.spda.create({
      data: {
        ...data,
      },
      include: {
        type: true,
      },
    });
  }

  async findAll({
    limit,
    page,
    project_id,
  }: PaginationSpdaInput): Promise<{ data: Spda[]; count: number }> {
    const count = await (
      await this.prisma.spda.findMany({
        where: {
          project_id: project_id ? project_id : {},
        },
      })
    ).length;

    const data = await this.prisma.spda.findMany({
      orderBy: {
        number: 'desc',
      },
      take: limit,
      skip: page * limit - limit || 0,
      where: {
        project_id: project_id ? project_id : {},
      },
      include: {
        type: true,
      },
    });

    return { data, count };
  }

  findOne(id: number) {
    return `This action returns a #${id} spda`;
  }

  update(id: number) {
    return `This action updates a #${id} spda`;
  }

  remove(id: number) {
    return `This action removes a #${id} spda`;
  }
}
