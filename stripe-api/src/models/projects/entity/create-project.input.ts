import { IsString } from "class-validator";
import { Projects } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";

export class CreateProjectInput implements Partial<Projects> {
  @ApiProperty()
  @IsString()
	name: string;

  @ApiProperty()
	@IsString()
	description: string;

  @ApiProperty()
  @IsString()
  cep: string;

  @ApiProperty()
  @IsString()
  city: string;

  @ApiProperty()
  @IsString()
  state: string;

  @ApiProperty()
  @IsString()
  address: string;

  @ApiProperty()
  @IsString()
  district: string;

  @ApiProperty()
  @IsString()
  complement: string;

  @ApiProperty()
  @IsString()
  user_id: string;

  @ApiProperty()
  @IsString()
  norm_id: string;
}