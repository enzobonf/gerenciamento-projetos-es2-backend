import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateTimeDto {
	@IsString()
	@IsNotEmpty()
	nome: string;

	@IsOptional()
	@IsNumber({}, { each: true })
	ids_profissionais: number[]; // recebe os ids dos profissionais do time
}
