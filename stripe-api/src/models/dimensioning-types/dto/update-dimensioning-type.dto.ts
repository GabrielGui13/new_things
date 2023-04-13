import { PartialType } from '@nestjs/swagger';
import { CreateDimensioningTypeDto } from './create-dimensioning-type.dto';

export class UpdateDimensioningTypeDto extends PartialType(CreateDimensioningTypeDto) {}
