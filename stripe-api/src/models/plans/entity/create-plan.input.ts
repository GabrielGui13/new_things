import { IsBoolean, IsInt, IsNumber, IsString } from "class-validator";
import { Plans } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";

export class CreatePlanInput implements Partial<Plans> {
  @ApiProperty()
  @IsString()
	name: string;

  @ApiProperty()
	@IsNumber()
	value: number;

  @ApiProperty()
  @IsInt()
  duration_months: number;
}