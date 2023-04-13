import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export default class AuthLoginInput {
  @IsString()
  @ApiProperty()
  email: string;

  @ApiProperty()
  @IsString()
  password: string;
}
