import { IsEmail, IsOptional, IsString, Matches, MaxLength, MinLength } from "class-validator";
import { User } from "../interface/user.interface"
import { Role } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";

export class UpdateUserInput implements Partial<User> {
	@ApiProperty()
	@IsString()
	name?: string;

	@ApiProperty()
	@IsString()
	@IsEmail()
	email?: string;

	@ApiProperty()
	@IsString()
	@IsOptional()
	phone?: string;

  @ApiProperty()
  @IsString()
	@IsOptional()
	license_type?: string;

  @ApiProperty()
  @IsString()
	@IsOptional()
	license_number?: string;
}