import { IsInt, IsNumber, IsOptional, IsString} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreatePlanInput {
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