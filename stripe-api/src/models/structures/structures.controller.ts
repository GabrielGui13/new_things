import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { StructuresService } from './structures.service';
import { CreateStructureInput } from './dto/create-structure.input';
import { ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/common/decorators/auth.decorator';
import { Role, Structure } from '@prisma/client';
import { PaginationStructureInput } from './entities/pagination-structure.input';

@ApiTags('structures')
@Controller('structures')
export class StructuresController {
  constructor(private readonly structuresService: StructuresService) {}

  @Auth(Role.ADMIN, Role.CUSTOMER)
  @Post()
  async create(@Body() data: CreateStructureInput): Promise<Structure> {
    return await this.structuresService.create(data);
  }

	@Auth(Role.ADMIN, Role.CUSTOMER)
  @Put()
  findAll(@Body() data: PaginationStructureInput): Promise<{data: Structure[], count: number}> {
    return this.structuresService.findAll(data);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.structuresService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.structuresService.remove(+id);
  }
}
