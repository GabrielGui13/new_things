import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/common/database/prisma.service';
import { CreateProjectClassDto } from './dto/create-project-class.dto';
import { ReadProjectClassDto } from './dto/read-project-class.dto';
import { UpdateProjectClassDto } from './dto/update-project-class.dto';

@Injectable()
export class ProjectClassesService {
  constructor(private prisma: PrismaService) {}

  create(createProjectClassDto: CreateProjectClassDto) {
    return 'This action adds a new projectClass';
  }

  async findAll(data: ReadProjectClassDto) {
    const project = await this.prisma.projects.findFirst({where: {id: data.project_id}})
    return await this.prisma.projectClass.findMany({where: {norm_id: project.norm_id}});
  }

  findOne(id: number) {
    return `This action returns a #${id} projectClass`;
  }

  update(id: number, updateProjectClassDto: UpdateProjectClassDto) {
    return `This action updates a #${id} projectClass`;
  }

  remove(id: number) {
    return `This action removes a #${id} projectClass`;
  }
}
