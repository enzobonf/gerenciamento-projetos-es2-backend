import { Type } from 'class-transformer';
import {
	IsEmail,
	IsNotEmpty,
	IsNumber,
	IsOptional,
	IsString,
	Length,
	ValidateNested,
} from 'class-validator';

export class EnderecoProfissionalDto {
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

export class CreateProfissionalDto {
	@IsString()
	@IsNotEmpty()
	id: string;

	@IsString()
	@Length(0, 45)
	@IsNotEmpty()
	nome: string;

	@IsString()
	@Length(0, 45)
	@IsNotEmpty()
	sobrenome: string;

	@IsEmail()
	@IsNotEmpty()
	email: string;

	@IsString()
	@IsOptional()
	ddi_telefone?: string;

	@IsString()
	@IsOptional()
	num_telefone?: string;

	@IsNumber()
	@IsNotEmpty()
	id_genero: number;

	@IsNumber()
	@IsNotEmpty()
	id_raca: number;

	@IsNumber()
	@IsNotEmpty()
	id_especialidade: number;

	@IsNumber()
	@IsNotEmpty()
	id_endereco: number;

	@IsNumber()
	@IsNotEmpty()
	numero_endereco: number;

	@IsString()
	@IsOptional()
	complemento_endereco?: string;
}
