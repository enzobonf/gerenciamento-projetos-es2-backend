import { IsNotEmpty, IsDate, IsNumber, Length, IsOptional, IsString, IsDateString } from 'class-validator';
export class CreateProjetoDto {
    @IsString()
	@Length(0, 45)
	@IsNotEmpty()
	nome: string;

    @IsDateString()
    @IsNotEmpty()
    data_inicio: Date | string;

    @IsDateString()
    @IsNotEmpty()
    data_fim: Date  | string;

    @IsNumber()
    @IsNotEmpty()
    valor: number;  

    @IsNumber()
	@IsNotEmpty()
	id_cliente: number;

	@IsNumber()
	@IsNotEmpty()
	id_time_responsavel: number;
}
