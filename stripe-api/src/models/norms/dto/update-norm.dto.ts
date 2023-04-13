import { PartialType } from '@nestjs/swagger';
import { CreateNormDto } from './create-norm.dto';

export class UpdateNormDto extends PartialType(CreateNormDto) {}
