import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsInt, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

export class PaginationPlanInput {
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
	name: string;

  @ApiProperty()
	@IsBoolean()
	@IsOptional()
	active: boolean;
}