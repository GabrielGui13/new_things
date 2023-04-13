import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Role } from '@prisma/client';
import { Auth } from 'src/common/decorators/auth.decorator';
import { CalcsService } from './calcs.service';
import { CreateCalcInput } from './dto/create-calc.input';
import { DuplicateCalcInput } from './dto/duplicate-calc.input';
import { FindCalcListInput } from './dto/find-calc-list.input';
import { FindCalcInput } from './dto/find-calc.input';
import { UpdateCalcInput } from './dto/update-calc.input';

@ApiTags('calcs')
@Controller('calcs')
export class CalcsController {
  constructor(private readonly calcsService: CalcsService) {}

  @Auth(Role.ADMIN, Role.CUSTOMER)
  @Post()
  async create(@Body() data: CreateCalcInput) {
    return await this.calcsService.create(data);
  }

  @Auth(Role.ADMIN, Role.CUSTOMER)
  @Put('/calculate')
  async calculate(@Body() data: CreateCalcInput) {
    return await this.calcsService.calculate(data);
  }

  @Auth(Role.ADMIN, Role.CUSTOMER)
  @Patch()
  async update(@Body() data: CreateCalcInput) {
    return await this.calcsService.update(data);
  }

  @Auth(Role.ADMIN, Role.CUSTOMER)
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.calcsService.findOne(id)
  }

  @Auth(Role.ADMIN, Role.CUSTOMER)
  @Put()
  findAll(@Body() data: FindCalcInput) {
    return this.calcsService.findAll(data);
  }

  @Auth(Role.ADMIN, Role.CUSTOMER)
  @Put('/report-list')
  findList(@Body() data: FindCalcListInput) {
    return this.calcsService.findList(data);
  }

  @Auth(Role.ADMIN, Role.CUSTOMER)
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.calcsService.delete(id);
  }

  @Auth(Role.ADMIN, Role.CUSTOMER)
  @Put('/duplicate')
  duplicate(@Body() data: DuplicateCalcInput) {
    return this.calcsService.duplicate(data.id)
  }
}
