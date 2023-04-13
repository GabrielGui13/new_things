import { Injectable } from '@nestjs/common';
import { SpdaType } from '@prisma/client';
import { PrismaService } from 'src/common/database/prisma.service';
import { CreateSpdaTypeDto } from './dto/create-spda-type.dto';
import { UpdateSpdaTypeDto } from './dto/update-spda-type.dto';

@Injectable()
export class SpdaTypeService {
  constructor(
		private prisma: PrismaService
	) {}
  create(createSpdaTypeDto: CreateSpdaTypeDto) {
    return 'This action adds a new spdaType';
  }

  async findAll(): Promise<SpdaType[]> {
    const data = await this.prisma.spdaType.findMany()
    return data
  }

  findOne(id: number) {
    return `This action returns a #${id} spdaType`;
  }

  update(id: number, updateSpdaTypeDto: UpdateSpdaTypeDto) {
    return `This action updates a #${id} spdaType`;
  }

  remove(id: number) {
    return `This action removes a #${id} spdaType`;
  }
}
