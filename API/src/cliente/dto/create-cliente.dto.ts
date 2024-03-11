import { Type } from 'class-transformer';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class EnderecoClienteDto {
	@IsString()
	@IsNotEmpty()
	cep: string;

	@IsString()
	@IsNotEmpty()
	logradouro: string;

	@IsString()
	@IsNotEmpty()
	bairro: string;

	@IsNumber()
	@IsNotEmpty()
	id_cidade: number;

	@IsString()
	@IsNotEmpty()
	sigla_uf: string;
}

export class CreateClienteDto {}
