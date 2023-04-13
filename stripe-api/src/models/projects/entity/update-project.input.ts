import { IsEmail, IsOptional, IsString, Matches, MaxLength, MinLength } from "class-validator";
import { Role } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";
import { Project } from "../interface/project.interface";

export class UpdateProjectInput implements Partial<Project> {
  @ApiProperty()
  @IsString()
	@IsOptional()
	name?: string;

  @ApiProperty()
	@IsString()
	@IsOptional()
	description?: string;

  @ApiProperty()
  @IsString()
	@IsOptional()
  cep?: string;

  @ApiProperty()
  @IsString()
	@IsOptional()
  city?: string;

  @ApiProperty()
  @IsString()
	@IsOptional()
  state?: string;

  @ApiProperty()
  @IsString()
	@IsOptional()
  address?: string;

  @ApiProperty()
  @IsString()
	@IsOptional()
  district?: string;

  @ApiProperty()
  @IsString()
	@IsOptional()
  complement?: string;

  @ApiProperty()
  @IsString()
	@IsOptional()
  user_id?: string;
}