import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SpdaTypeService } from './spda-type.service';
import { CreateSpdaTypeDto } from './dto/create-spda-type.dto';
import { UpdateSpdaTypeDto } from './dto/update-spda-type.dto';
import { Auth } from 'src/common/decorators/auth.decorator';
import { Role, SpdaType } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('spda-type')
@Controller('spda-type')
export class SpdaTypeController {
  constructor(private readonly spdaTypeService: SpdaTypeService) {}

  @Post()
  create(@Body() createSpdaTypeDto: CreateSpdaTypeDto) {
    return this.spdaTypeService.create(createSpdaTypeDto);
  }

  @Auth(Role.ADMIN, Role.CUSTOMER)
  @Get()
  async findAll(): Promise<SpdaType[]> {
    return await this.spdaTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.spdaTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSpdaTypeDto: UpdateSpdaTypeDto) {
    return this.spdaTypeService.update(+id, updateSpdaTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.spdaTypeService.remove(+id);
  }
}
