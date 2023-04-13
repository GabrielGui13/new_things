import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { SpdasService } from './spdas.service';
import { ApiTags } from '@nestjs/swagger';
import { Auth } from 'src/common/decorators/auth.decorator';
import { Role, Spda } from '@prisma/client';
import { PaginationSpdaInput } from './entities/pagination-spda.input';
import { CreateSpdaInput } from './dto/create-spda.input';

@ApiTags('spdas')
@Controller('spdas')
export class SpdasController {
  constructor(private readonly spdasService: SpdasService) {}

  @Auth(Role.ADMIN, Role.CUSTOMER)
  @Post()
  async create(@Body() data: CreateSpdaInput): Promise<Spda> {
    return await this.spdasService.create(data);
  }

	@Auth(Role.ADMIN, Role.CUSTOMER)
  @Put()
  findAll(@Body() data: PaginationSpdaInput): Promise<{data: Spda[], count: number}> {
    return this.spdasService.findAll(data);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.spdasService.findOne(+id);
  }

  @Auth(Role.CUSTOMER)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.spdasService.remove(+id);
  }
}
