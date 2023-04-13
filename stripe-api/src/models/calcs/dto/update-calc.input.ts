import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateCalcInput{
    // spda
    @ApiProperty()
    @IsString()
    spda_id: string;

    @ApiProperty()
    @IsNumber()
    spda_height: number; // h

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

    @ApiProperty()
    @IsNumber()
    structure_width: number; // l1

    @ApiProperty()
    @IsNumber()
    structure_height: number; // h1

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
    
    @ApiProperty()
    @IsNumber()
    margin: number; // mc

    // calc update
    @ApiProperty()
    @IsString()
    calc_id: string;

    @ApiProperty({nullable: true})
    @IsNumber()
    @IsOptional()
    structure_distance?: number;
}
