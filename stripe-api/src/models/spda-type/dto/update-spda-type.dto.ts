import { PartialType } from '@nestjs/swagger';
import { CreateSpdaTypeDto } from './create-spda-type.dto';

export class UpdateSpdaTypeDto extends PartialType(CreateSpdaTypeDto) {}
