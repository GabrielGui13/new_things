import { PartialType } from '@nestjs/swagger';
import { CreateProjectClassDto } from './create-project-class.dto';

export class UpdateProjectClassDto extends PartialType(CreateProjectClassDto) {}
