import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { isCepValido } from 'src/utils/isCepValido';

@Injectable()
export class EnderecoService {
	constructor(private readonly prismaService: PrismaService) {}

	async findByCep(cep: string) {
		if (!isCepValido(cep))
			throw new HttpException('CEP inválido', HttpStatus.BAD_REQUEST);

		const endereco = await this.prismaService.endereco.findFirst({
			where: {
				cep,
			},
			include: {
				bairro: true,
				cidade: {
					include: {
						unidade_federacao: true,
					},
				},
				cliente: true,
				logradouro: {
					include: {
						tipo_logradouro: true,
					},
				},
			},
		});

		return {
			cep: endereco.cep,
			tipo_logradouro: endereco.logradouro.tipo_logradouro.nome,
			logradouro: endereco.logradouro.nome,
			bairro: endereco.bairro.nome,
			cidade: endereco.cidade.nome,
			uf: endereco.cidade.unidade_federacao.nome,
			sigla_uf: endereco.cidade.sigla_uf,
		};
	}
}
