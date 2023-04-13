import { IsBoolean, IsInt, IsNumber, IsOptional, IsString } from "class-validator";
import { Plans, Subscription, UserPlanStatus } from "@prisma/client";
import { ApiProperty } from "@nestjs/swagger";

export class CreateSubscriptionInput implements Partial<Subscription> {
  @ApiProperty()
  @IsString()
  @IsOptional()
	external_id?: string;

  @ApiProperty()
	@IsNumber()
	value: number;

  @ApiProperty()
  @IsString()
	user_id: string;

  @ApiProperty()
  @IsString()
	plan_id: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
	expiration?: string;

  @ApiProperty({ enumName: "UserPlanStatus", enum: UserPlanStatus })
	plan_status: UserPlanStatus;
}