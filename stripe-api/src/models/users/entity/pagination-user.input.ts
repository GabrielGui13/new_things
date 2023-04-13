import { ApiProperty } from "@nestjs/swagger";
import { Role } from "@prisma/client";
import { IsInt, IsNumber, IsPositive, IsString } from "class-validator";

export class PaginationUserInput {
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

  @ApiProperty({ enum: Role, enumName: 'Role' })
	@IsString()
	role: Role;
}