import { IsOptional, IsString} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateCustomerInput {
  @ApiProperty()
  @IsString()
	name: string; 

  @ApiProperty()
  @IsString()
	email: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
	phone?: string;
}