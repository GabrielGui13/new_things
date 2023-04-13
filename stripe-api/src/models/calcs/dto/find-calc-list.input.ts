import { ApiProperty } from "@nestjs/swagger";
import { IsArray, IsBoolean, IsNumber, IsString } from "class-validator";

export class FindCalcListInput{
    @ApiProperty()
    @IsArray()
    calcs_id: string[];
}
