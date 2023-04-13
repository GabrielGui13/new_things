import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export default class AuthNewPasswordInput {
  @IsString()
  @ApiProperty()
  id: string;

  @IsString()
  @ApiProperty()
  token: string;

  @IsString()
  @ApiProperty()
  password: string;
}
