import { isNumber, IsNumber } from "class-validator";

export class CreateCalcOutput{
    @IsNumber()
    protected_horizontal_distance: number;

    @IsNumber()
    ae_limit_height: number;

    @IsNumber()
    ae_limit_horizontal_distance: number;

    @IsNumber() // cobertura e isolado
    structure_limit_horizontal_distance?: number;

    // Gráfico

    @IsNumber()
    hc_aux?: number;

    @IsNumber()
    dpc?: number;

    // Plano de cobertura

    @IsNumber()
    fic_plan_height?: number;

    @IsNumber()
    fic_plan_radius?: number;

    // Verificação de Limites

    @IsNumber()
    margin_object?: object;

    @IsNumber()
    hc_aux_object?: object;

    @IsNumber()
    dp_object?: object;

    // Spda Isolado

    @IsNumber()
    output_spda_height?: number

    @IsNumber()
    output_margin?: number

    @IsNumber() 
    structure_limit_height?: number;
}
