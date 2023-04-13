import { IsBoolean, IsEmail, IsInt, IsNumber, IsOptional, IsString, Matches, MaxLength, MinLength } from "class-validator";
import { Plans } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";

export class UpdatePlanInput implements Partial<Plans> {
  @ApiProperty()
  @IsString()
  @IsOptional()
	name?: string;

  @ApiProperty()
	@IsNumber()
  @IsOptional()
	value?: number;

  @ApiProperty()
  @IsInt()
  @IsOptional()
  duration_months?: number;

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
  active?: boolean;
}