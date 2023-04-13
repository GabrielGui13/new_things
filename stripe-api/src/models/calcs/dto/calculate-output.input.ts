import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsNumber, IsOptional, IsString } from "class-validator";

export class CalculateOutput{
    spda_height: number; // h

    // dpi
    dpi: boolean; // flagDim
    dpi_distance: number; // dpi

    // structure
    structure_height: number;
    structure_width: number;

    // class
    project_class_radius: number // R

    // explsive area
    explosive_atmosphere: boolean; //flagAe
    ea_radius: number; // r
    
    // other
    margin: number; // mc

    // limite calc 
    structure_distance?: number;
}
