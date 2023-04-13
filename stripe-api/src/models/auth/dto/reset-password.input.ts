import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export default class AuthResetPasswordInput {
  @IsString()
  @ApiProperty()
  email: string;
}
