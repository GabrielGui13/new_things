import { IsBoolean, IsEmail, IsOptional, IsString, Matches, MaxLength, MinLength } from "class-validator";
import { Role } from "@prisma/client";
import { Users } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserInput implements Partial<Users> {
  @ApiProperty()
  @IsString()
	name: string;

  @ApiProperty()
	@IsEmail()
	email: string;

  @ApiProperty({ enum: Role, enumName: 'Role' })
	role?: Role;

  @MinLength(8)
  @MaxLength(20)
  @IsString()
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'password too weak',
  })
  @ApiProperty()
  password: string;

  @MinLength(4)
  @MaxLength(20)
  @ApiProperty()
  @IsString()
  confirmationPassword: string;

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

  @ApiProperty()
  @IsBoolean()
  @IsOptional()
	freePlan?: boolean;
}