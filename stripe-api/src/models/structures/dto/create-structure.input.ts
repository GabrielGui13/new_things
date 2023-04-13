import { ApiProperty } from "@nestjs/swagger";
import { Structure } from "@prisma/client";
import { isNumber, IsNumber, IsString } from "class-validator";

export class CreateStructureInput{
    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsNumber()
    number: number;

    @ApiProperty()
    @IsNumber()
    height: number;

    @ApiProperty()
    @IsNumber()
    width: number;
    
    @ApiProperty()
    @IsString()
    project_id: string;
}
