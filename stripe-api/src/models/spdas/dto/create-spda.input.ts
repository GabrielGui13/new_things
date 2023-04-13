import { ApiProperty } from "@nestjs/swagger";
import { Spda } from "@prisma/client";
import { IsNumber, IsString } from "class-validator";

export class CreateSpdaInput{
    @ApiProperty()
    @IsNumber()
    number: number;
    
    @ApiProperty()
    @IsString()
    description: string;
    
    @ApiProperty()
    @IsString()
    type_id: string;
    
    @ApiProperty()
    @IsString()
    project_id: string;
}
