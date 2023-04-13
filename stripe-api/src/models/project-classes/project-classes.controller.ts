import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ProjectClassesService } from './project-classes.service';
import { CreateProjectClassDto } from './dto/create-project-class.dto';
import { UpdateProjectClassDto } from './dto/update-project-class.dto';
import { ApiTags } from '@nestjs/swagger';
import { ReadProjectClassDto } from './dto/read-project-class.dto';

@ApiTags('project-classes')
@Controller('project-classes')
export class ProjectClassesController {
  constructor(private readonly projectClassesService: ProjectClassesService) {}

  @Post()
  create(@Body() createProjectClassDto: CreateProjectClassDto) {
    return this.projectClassesService.create(createProjectClassDto);
  }

  @Put()
  async findAll(@Body() data: ReadProjectClassDto) {
    let response = await this.projectClassesService.findAll(data)
    return response;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.projectClassesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProjectClassDto: UpdateProjectClassDto) {
    return this.projectClassesService.update(+id, updateProjectClassDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.projectClassesService.remove(+id);
  }
}
