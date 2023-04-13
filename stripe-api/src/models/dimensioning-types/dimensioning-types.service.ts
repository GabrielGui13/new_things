import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/database/prisma.service';
import { CreateDimensioningTypeDto } from './dto/create-dimensioning-type.dto';
import { UpdateDimensioningTypeDto } from './dto/update-dimensioning-type.dto';

@Injectable()
export class DimensioningTypesService {
  constructor(private prisma: PrismaService) {}

  create(createDimensioningTypeDto: CreateDimensioningTypeDto) {
    return 'This action adds a new dimensioningType';
  }

  async findAll() {
    return await this.prisma.dimensioningType.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} dimensioningType`;
  }

  update(id: number, updateDimensioningTypeDto: UpdateDimensioningTypeDto) {
    return `This action updates a #${id} dimensioningType`;
  }

  remove(id: number) {
    return `This action removes a #${id} dimensioningType`;
  }

  async fixDimensioning() {
    try {
      let coverage = await this.prisma.dimensioningType.findFirst({
        where: {
          name: 'Cálculo De Planos de Cobertura',
        },
      });
      console.log(coverage);
      if (coverage) {
        let newCoverage = await this.prisma.dimensioningType.update({
          where: {
            id: coverage.id,
          },
          data: {
            name: 'Cálculo de Planos de Cobertura',
          },
        });
        console.log(newCoverage);
      }
      let isolated = await this.prisma.dimensioningType.findFirst({
        where: {
          name: 'Cálculo SPDA Isolado',
        },
      });
      console.log(isolated);

      if (isolated) {
        let newIsolated = await this.prisma.dimensioningType.update({
          where: {
            id: isolated.id,
          },
          data: {
            name: 'Cálculo de SPDA Isolado',
          },
        });
        console.log(newIsolated);
      }

      let limits = await this.prisma.dimensioningType.findFirst({
        where: {
          name: 'Verificação De Limites',
        },
      });
      console.log(limits);
      if (limits) {
        let newLimits = await this.prisma.dimensioningType.update({
          where: {
            id: limits.id,
          },
          data: {
            name: 'Verificação de Limites',
          },
        });
        console.log(newLimits);
      }
    } catch (err) {
      console.log(err);
    }

    return 'Dimensionamentos atualizados';
  }
}
