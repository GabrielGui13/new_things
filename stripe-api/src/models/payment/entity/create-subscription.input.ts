import { IsString} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateSubscriptionInput {
  @ApiProperty()
  @IsString()
	customer_id: string;

  @ApiProperty()
  @IsString()
	product_id: string;

  @ApiProperty()
  @IsString()
	user_id: string;

  @ApiProperty()
  @IsString()
	plan_id: string;
}