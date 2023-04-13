import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCalcInput } from './dto/create-calc.input';
import { PrismaService } from 'src/common/database/prisma.service';
import { UpdateCalcInput } from './dto/update-calc.input';
import { FindCalcInput } from './dto/find-calc.input';
import { FindCalcListInput } from './dto/find-calc-list.input';

// Calcs
import { calcCoveragePlan } from 'src/utils/coveragePlanCalcFormulas';
import { calcLimits } from 'src/utils/LimitsCalcFormulas';
import { calcIsolatedSpda } from 'src/utils/isolatedSpdaCalc';
import { Calc, CalcOutput, DimensioningType, Structure } from '@prisma/client';
import { SpdaType } from '../spda-type/entities/spda-type.entity';

@Injectable()
export class CalcsService {
  constructor(private prisma: PrismaService) {}

  validateForm(
    data: CreateCalcInput,
    dimensioningType: DimensioningType,
    structure: Structure,
  ) {
    let isFormValid = true;
    let validateFormMessage = '';

    if (!dimensioningType || !structure) {
      isFormValid = false;
      validateFormMessage = 'Estrutura ou tipo de dimensionamento inválido';
    }

    if (data.spda_height > data.project_class_radius && isFormValid) {
      isFormValid = false;
      validateFormMessage = `A altura 'h' do SPDA deve ser igual ou inferior a classe de proteção 'R'`;
    }

    if (
      data.explosive_atmosphere &&
      structure.height + data.ea_radius >= data.spda_height &&
      isFormValid
    ) {
      isFormValid = false;
      validateFormMessage = `A altura 'h' do SPDA deve ser superior a soma da da altura da estrutura 'h1' com a margem de cobertura 'mc' e o raio da área classificada 'r'`;
    }

    if (structure.height >= data.spda_height && isFormValid) {
      isFormValid = false;
      validateFormMessage = `A altura 'h' do SPDA deve ser superior a altura da estrutura 'h1' somada a margem de cobertura 'mc'`;
    }

    if (
      dimensioningType.name == 'Verificação de Limites' ||
      (dimensioningType.name == 'Cálculo SPDA Isolado' && isFormValid)
    ) {
      if (
        data.explosive_atmosphere &&
        data.dpi &&
        data.structure_distance + data.ea_radius > data.dpi_distance &&
        isFormValid
      ) {
        isFormValid = false;
        validateFormMessage = `A distância 'd1' somada ao raio (r) da área classificada deve ser inferior a classe de proteção 'R' e 'dpi' informada `;
      }
      if (
        data.explosive_atmosphere &&
        data.structure_distance + data.ea_radius >= data.project_class_radius &&
        isFormValid
      ) {
        isFormValid = false;
        validateFormMessage = `A distância 'd1' somada ao raio (r) da área classificada deve ser inferior a classe de proteção 'R' `;
      }
      if (
        data.dpi &&
        data.structure_distance > data.dpi_distance &&
        isFormValid
      ) {
        isFormValid = false;
        validateFormMessage = `A distância 'd1' deve ser inferior a a classe de proteção 'R' e 'dpi' informada `;
      }
      if (data.structure_distance >= data.project_class_radius && isFormValid) {
        isFormValid = false;
        validateFormMessage = `A distância 'd1' deve ser inferior a classe de proteção 'R' `;
      }
      if (structure.width > 2 * data.structure_distance && isFormValid) {
        isFormValid = false;
        validateFormMessage = `A distância 'd1' deve ser superior a metade da lagura 'l'`;
      }
    }

    if (!isFormValid) {
      throw new HttpException(`${validateFormMessage}`, HttpStatus.BAD_REQUEST);
    }
  }

  async validateCalc(
    calc: any,
    calcOutput: CalcOutput,
    dimensioningType: DimensioningType,
    structure: Structure,
  ) {
    // Universal - Plano de cobertura

    let isCalcValid = true;
    let validateCalcMessage = '';

    // Verificações universais
    if (
      calc.explosive_atmosphere &&
      calcOutput.ae_limit_height <= structure.height
    ) {
      isCalcValid = false;
      validateCalcMessage = `O SPDA instalado não poderá prover cobertura a esta estrutura, visto que sua altura excede a Altura Limite da Área explosiva da estrutura`;
    } else if (
      calc.explosive_atmosphere &&
      calcOutput.ae_limit_horizontal_distance < 0
    ) {
      isCalcValid = false;
      validateCalcMessage = `O SPDA instalado não poderá prover cobertura a esta estrutura, visto que sua Distância horizontal Limite da Área explosiva é negativa`;
    } else if (calcOutput.structure_limit_height <= structure.height) {
      isCalcValid = false;
      validateCalcMessage = `O SPDA instalado não poderá prover cobertura a esta estrutura, visto que sua altura excede a Altura Limite calculada`;
    } else if (calcOutput.structure_limit_horizontal_distance < 0) {
      isCalcValid = false;
      validateCalcMessage = `O SPDA instalado não poderá prover cobertura a esta estrutura, visto que sua Distância horizontal Limite é negativa`;
    } else if (dimensioningType.name == 'Cálculo SPDA Isolado') {
      // No Spda Isolado
      if (calc.spda_height < calcOutput.spda_calculated_height) {
        // hp<hc
        isCalcValid = false;
        validateCalcMessage = `O SPDA instalado não poderá prover cobertura a esta estrutura, visto que a altura de projeto calculáda (hc) excede a altura de projeto (hp)`;
      } else if (calcOutput.output_margin < 0) {
        isCalcValid = false;
        validateCalcMessage = `O SPDA instalado não poderá prover cobertura a esta estrutura, visto que sua margem de cobetura cálculada é inferior a zero`;
      } else if (calc.margin < calcOutput.output_margin) {
        isCalcValid = false;
        validateCalcMessage = `O SPDA instalado não poderá prover cobertura a esta estrutura, visto que sua margem de cobetura cálculada para a classe de proteção é inferior a informada no projeto`;
      }
    } else if (dimensioningType.name == 'Verificação de Limites') {
      // Na verificação de limites
      if (calcOutput.margin_object[calc.project_class_radius] < 0) {
        isCalcValid = false;

        let projectClasses = await this.prisma.projectClass.findMany();
        let protectedClass;

        if (!(calc.project_class_radius == 60)) {
          // filtra todos os projeto em que a margin não é negativa, portanto há proteção
          protectedClass = projectClasses.find((projectClass) => {
            return calcOutput.margin_object[projectClass.sphere_radius] > 0;
          });
        }

        validateCalcMessage = `O SPDA instalado não poderá prover cobertura a esta estrutura, visto que a margem de cobetura cálculada para a classe de proteção é inferior a zero ${
          protectedClass
            ? `, entretanto, poderá proporcionar proteção a partir da ${protectedClass.name} `
            : ''
        }`;
      } else if (
        calcOutput.margin_object[calc.project_class_radius] < calc.margin
      ) {
        isCalcValid = false;

        let projectClasses = await this.prisma.projectClass.findMany();
        let protectedClass;

        if (!(calc.project_class_radius == 60)) {
          // filtra todos os projeto em que a margin é superior a informada, portanto há proteção adequada
          protectedClass = projectClasses.find((projectClass) => {
            return (
              calcOutput.margin_object[projectClass.sphere_radius] >=
              calc.margin
            );
          });
        }

        validateCalcMessage = `O SPDA instalado provê proteção a esta estrutura, porém, a proteção é inadequada, visto que sua margem de cobetura cálculada é inferior a informada ${
          protectedClass
            ? `, entretanto, poderá proporcionar proteção adequada a partir da ${protectedClass.name} `
            : ''
        }`;
      }
    }

    if (!isCalcValid) {
      //throw new HttpException(`${validateCalcMessage}`, HttpStatus.BAD_REQUEST);
    }

    return {
      isCalcValid,
      validateCalcMessage,
    };
  }

  async calculate(data: CreateCalcInput) {
    const dimensioningType = await this.prisma.dimensioningType.findFirst({
      where: { name: data.dimensioning_type_id },
    });
    const structure = await this.prisma.structure.findFirst({
      where: { id: data.structure_id },
    });
    const projectClass = await this.prisma.projectClass.findFirst({
      where: { id: data.project_class_id },
    });
    const spda = await this.prisma.spda.findFirst({
      where: {
        id: data.spda_id,
      },
    });

    this.validateForm(data, dimensioningType, structure);

    const calc = {
      ...data,
      dimensioning_type_id: dimensioningType.id,
      structure: structure,
      project_class: projectClass,
      spda: spda,
    };

    const toCalcData = {
      structure_height: structure.height,
      structure_width: structure.width,
      ...data,
    };

    let calcResult;

    if (dimensioningType.name == 'Cálculo de Planos de Cobertura')
      calcResult = calcCoveragePlan(toCalcData); // Plano de cobertura
    else if (dimensioningType.name == 'Verificação de Limites')
      calcResult = calcLimits(toCalcData); // Limites de cobertura
    else if (dimensioningType.name == 'Cálculo de SPDA Isolado')
      calcResult = calcIsolatedSpda(toCalcData); // spda isolado
    let calcOutput = {
      spda_calculated_height: calc.spda_height,
      ...calcResult,
    };

    const { validateCalcMessage, isCalcValid } = await this.validateCalc(
      calc,
      calcOutput,
      dimensioningType,
      structure,
    );

    calcOutput = {
      ...calcOutput,
      diagnostic_message: validateCalcMessage,
      diagnostic_is_valid: isCalcValid,
    };

    return { calcOutput, calc };
  }

  async create(data: CreateCalcInput) {
    const calculateResult = await this.calculate(data);

    const { structure, calc_id, project_class, spda, ...createCalcData } =
      calculateResult.calc;
    const createCalcOutputData = calculateResult.calcOutput;

    let lastestVersion = await this.prisma.calc.findMany({
      where: {
        structure_id: createCalcData.structure_id,
        spda_id: createCalcData.spda_id,
        dimensioning_type_id: createCalcData.dimensioning_type_id,
      },
      orderBy: {
        version: 'desc',
      },
      take: 1,
    });

    let countVersion = lastestVersion[0]?.version + 1 || 0;

    const calc = await this.prisma.calc.create({
      data: {
        ...createCalcData,
        version: countVersion || 0,
      },
      include: {
        structure: true,
        project_class: true,
        spda: true,
      },
    });

    const calcOutput = await this.prisma.calcOutput.create({
      data: {
        ...createCalcOutputData,
        calc_id: calc.id,
      },
    });

    return { calcOutput, calc };
  }

  async update(data: CreateCalcInput) {
    const findCalc = await this.prisma.calc.findFirst({
      where: {
        id: data.calc_id,
      },
    });
    if (!findCalc) throw new NotFoundException('Este cálculo não existe');

    const calculateResult = await this.calculate(data);

    const { structure, calc_id, project_class, spda, ...updateCalcData } =
      calculateResult.calc;
    const updateCalcOutputData = calculateResult.calcOutput;

    const calc = await this.prisma.calc.update({
      where: { id: findCalc.id },
      data: {
        ...updateCalcData,
      },
      include: {
        structure: true,
        spda: true,
      },
    });

    // Caso não exista um output, ele é criado
    const findCalcOutput = await this.prisma.calcOutput.findFirst({
      where: { calc_id: calc.id },
    });

    const calcOutput = findCalcOutput
      ? await this.prisma.calcOutput.update({
          where: { id: findCalcOutput.id },
          data: {
            ...updateCalcOutputData,
          },
        })
      : await this.prisma.calcOutput.create({
          data: {
            ...updateCalcOutputData,
          },
        });

    return { calcOutput, calc };
  }

  async delete(id: string) {
    const findCalc = await this.prisma.calc.findFirst({
      where: {
        id: id,
      },
    });
    if (!findCalc) throw new NotFoundException('Cálculo não encontrado');

    return await this.prisma.calc.delete({
      where: {
        id: id,
      },
    });
  }

  async findAll(data: FindCalcInput) {
    return await this.prisma.calc.findMany({
      where: {
        project_id: data.project_id,
        /*dimensioning_type_id: data.dimensioning_type_id*/
      },
      include: {
        spda: true,
        structure: true,
        dimensioning_type: true,
      },
    });
  }

  async findList(data: FindCalcListInput) {
    let calcsArray = [];
    for (const index in data.calcs_id) {
      calcsArray.push(
        await this.prisma.calc.findFirst({
          where: {
            id: data.calcs_id[index],
          },
          include: {
            project: {
              include: {
                norm: true,
                user: true,
              },
            },
            calc_output: true,
            structure: true,
            spda: {
              include: {
                type: true,
              },
            },
            project_class: true,
          },
        }),
      );
    }
    return calcsArray;
  }

  async duplicate(id: string) {
    const { calc_output, ...findCalc } = await this.prisma.calc.findFirst({
      where: {
        id: id,
      },
      include: {
        calc_output: true,
      },
    });
    if (!findCalc) throw new NotFoundException('Cálculo não encontrado');

    const { id: calcId, ...createCalcData } = findCalc;
    const { id: outputId, calc_id, ...createCalcOutputData } = calc_output;

    for (var key in createCalcData) {
      // remove as keys null e undefined
      if (createCalcData[key] === null || createCalcData[key] === undefined) {
        delete createCalcData[key];
      }
    }
    for (var key in createCalcOutputData) {
      // remove as keys null e undefined
      if (
        createCalcOutputData[key] === null ||
        createCalcOutputData[key] === undefined
      ) {
        delete createCalcOutputData[key];
      }
    }

    let lastestVersion = await this.prisma.calc.findMany({
      where: {
        structure_id: createCalcData.structure_id,
        spda_id: createCalcData.spda_id,
        dimensioning_type_id: createCalcData.dimensioning_type_id,
      },
      orderBy: {
        version: 'desc',
      },
      take: 1,
    });

    let countVersion = lastestVersion[0]?.version + 1 || 0;

    const calc = await this.prisma.calc.create({
      data: {
        ...createCalcData,
        version: countVersion || 0,
      },
    });

    const calcOutput = await this.prisma.calcOutput.create({
      data: {
        ...createCalcOutputData,
        calc_id: calc.id,
      },
    });

    return { calcOutput, calc };
  }

  async findOne(id: string) {
    const findCalc = await this.prisma.calc.findFirst({
      where: {
        id: id,
      },
      include: {
        calc_output: true,
        spda: {
          include: {
            type: true,
          },
        },
        structure: true,
        project_class: true,
      },
    });
    if (!findCalc) throw new NotFoundException('Cálculo não encontrado');

    return findCalc;
  }
}
