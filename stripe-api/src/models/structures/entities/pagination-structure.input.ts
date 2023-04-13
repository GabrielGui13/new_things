import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsNumber, IsPositive, IsString } from 'class-validator';

export class PaginationStructureInput {
  @ApiProperty()
  @IsNumber()
  @IsPositive()
  @IsInt()
  limit: number;

  @ApiProperty()
  @IsNumber()
  @IsPositive()
  @IsInt()
  page: number;

  @ApiProperty()
  @IsString()
  project_id: string;
}
