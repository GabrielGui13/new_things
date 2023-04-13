import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Role } from '@prisma/client';
import { Auth } from 'src/common/decorators/auth.decorator';
import { DimensioningTypesService } from './dimensioning-types.service';
import { CreateDimensioningTypeDto } from './dto/create-dimensioning-type.dto';
import { UpdateDimensioningTypeDto } from './dto/update-dimensioning-type.dto';

@ApiTags('dimensioning-types')
@Controller('dimensioning-types')
export class DimensioningTypesController {
  constructor(private readonly dimensioningTypesService: DimensioningTypesService) {}

  @Post()
  create(@Body() createDimensioningTypeDto: CreateDimensioningTypeDto) {
    return this.dimensioningTypesService.create(createDimensioningTypeDto);
  }

  @Auth(Role.ADMIN, Role.CUSTOMER)
  @Get()
  findAll() {
    return this.dimensioningTypesService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDimensioningTypeDto: UpdateDimensioningTypeDto) {
    return this.dimensioningTypesService.update(+id, updateDimensioningTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dimensioningTypesService.remove(+id);
  }

  @Get('/fix-dimensioning')
  fixDimensioning() {
    return this.dimensioningTypesService.fixDimensioning();
  }
  
}
