import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/database/prisma.service';
import { CreateNormDto } from './dto/create-norm.dto';
import { UpdateNormDto } from './dto/update-norm.dto';
@Injectable()
export class NormsService {
  constructor(private prisma: PrismaService) {}

  create(createNormDto: CreateNormDto) {
    return 'This action adds a new norm';
  }

  async findAll() {
    const norms = await this.prisma.norm.findMany();
    return norms;
  }

  findOne(id: number) {
    return `This action returns a #${id} norm`;
  }

  update(id: number, updateNormDto: UpdateNormDto) {
    return `This action updates a #${id} norm`;
  }

  remove(id: number) {
    return `This action removes a #${id} norm`;
  }
}
