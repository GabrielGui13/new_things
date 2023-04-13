import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateCalcInput{
    // project
    @ApiProperty()
    @IsString()
    project_id: string;

    // spda
    @ApiProperty()
    @IsString()
    spda_id: string;

    @ApiProperty()
    @IsNumber()
    spda_height: number; // h
    
    @ApiProperty()
    @IsString()
    @IsOptional()
    spda_project_height?: number;

    // dpi
    @ApiProperty()
    @IsBoolean()
    dpi: boolean; // flagDim

    @ApiProperty()
    @IsNumber()
    dpi_distance: number; // dpi

    // structure
    @ApiProperty()
    @IsString()
    structure_id: string;

    // class

    @ApiProperty()
    @IsString()
    project_class_id: string;

    @ApiProperty()
    @IsNumber()
    project_class_radius: number // R

    // explsive area
    @ApiProperty()
    @IsBoolean()
    explosive_atmosphere: boolean; //flagAe

    @ApiProperty()
    @IsNumber()
    ea_radius: number; // r
    
    // other

    @ApiProperty()
    @IsString()
    dimensioning_type_id: string;

    @ApiProperty()
    @IsNumber()
    margin: number; // mc

    // calc update
    @ApiProperty()
    @IsString()
    calc_id?: string;

    @ApiProperty({nullable: true})
    @IsNumber()
    @IsOptional()
    structure_distance?: number;

    @ApiProperty({nullable: true})
    @IsString()
    @IsOptional()
    technical_report: string;
}
