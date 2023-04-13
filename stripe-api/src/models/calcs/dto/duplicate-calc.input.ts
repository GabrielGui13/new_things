import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class DuplicateCalcInput{
    @ApiProperty()
    @IsString()
    id: string;
}
