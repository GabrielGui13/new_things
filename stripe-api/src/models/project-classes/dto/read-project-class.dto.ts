import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class ReadProjectClassDto {
    @ApiProperty()
    @IsString()
    project_id: string;
}
