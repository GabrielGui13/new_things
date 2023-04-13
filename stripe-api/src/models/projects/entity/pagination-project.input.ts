import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNumber, IsPositive, IsString } from "class-validator";

export class PaginationProjectInput {
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
	@IsString()
	user_id: string;
}