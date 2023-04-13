import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNumber, IsString } from "class-validator";

export class FindCalcInput{
    @ApiProperty()
    @IsString()
    project_id: string;

    /*@ApiProperty()
    @IsString()
    dimensioning_type_id: string;*/
}
