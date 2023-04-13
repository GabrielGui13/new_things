import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NormsService } from './norms.service';
import { CreateNormDto } from './dto/create-norm.dto';
import { UpdateNormDto } from './dto/update-norm.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('norms')
@Controller('norms')
export class NormsController {
  constructor(private readonly normsService: NormsService) {}

  @Post()
  create(@Body() createNormDto: CreateNormDto) {
    return this.normsService.create(createNormDto);
  }

  @Get()
  findAll() {
    return this.normsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.normsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNormDto: UpdateNormDto) {
    return this.normsService.update(+id, updateNormDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.normsService.remove(+id);
  }
}
