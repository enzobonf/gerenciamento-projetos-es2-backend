import { IsNotEmpty, IsString } from 'class-validator';

export class CreateEnderecoDto {
	@IsString()
	@IsNotEmpty()
	cep: string;

	@IsString()
	logradouro: string;

	@IsString()
	@IsNotEmpty()
	bairro: string;

	@IsString()
	@IsNotEmpty()
	cidade: string;

	@IsString()
	@IsNotEmpty()
	uf: string;
}
