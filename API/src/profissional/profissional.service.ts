import { Injectable } from '@nestjs/common';
import { CreateProfissionalDto } from './dto/create-profissional.dto';
import { UpdateProfissionalDto } from './dto/update-profissional.dto';
import { PrismaService } from 'nestjs-prisma';
import { Prisma } from '@prisma/client';
import { identity } from 'rxjs';


@Injectable()
export class ProfissionalService {
	constructor(private readonly prismaService: PrismaService) {}

	private default_include: Prisma.profissionalInclude = {
		endereco: {
			include: {
				logradouro: {
					include: {
						tipo_logradouro: true,
					},
				},
				bairro: true,
				cidade: {
					include: {
						unidade_federacao: true,
					},
				},
			},
		},
		genero:true,
		raca:true,
		especialidade:true
			
	};

	create(createProfissionalDto: CreateProfissionalDto) {
		return this.prismaService.profissional.create({
			data: createProfissionalDto,
		});
	}

	private formatProfissional(profissional: any) {
		const { endereco, raca, genero, especialidade } = profissional;
		const { logradouro, bairro, cidade } = endereco;

		if (profissional.endereco)
			profissional.endereco = {
				tipo_logradouro: logradouro.tipo_logradouro.nome,
				logradouro: logradouro.nome,
				numero: profissional.nro_endereco,
				bairro: bairro.nome,
				cidade: cidade.nome,
				uf: cidade.unidade_federacao.nome,
				sigla_uf: cidade.unidade_federacao.sigla,
				cep: endereco.cep,
			};
			
			profissional.email = profissional.email;
			profissional.raca = raca.identificacao;
			profissional.genero = genero.identificacao;
			profissional.especialidade = especialidade.nome;
	}

	async findAll() {
		const profissionais: any[] = await this.prismaService.profissional.findMany({
			include: this.default_include,
		});

		profissionais.forEach((x) => this.formatProfissional(x));
		return { profissionais };
	}

	async findOne(id: number) {

		const profissionais: any[] = await  this.prismaService.profissional.findMany({
			//include:this.default_include,
			where:{id}
		});

		//profissionais.forEach((x) => this.formatProfissional(x));
		
		return profissionais;
	}

	update(id: number, updateProfissionalDto: UpdateProfissionalDto) {
		return `This action updates a #${id} profissional`;
	}

	remove(id: number) {
		return `This action removes a #${id} profissional`;
	}
}
