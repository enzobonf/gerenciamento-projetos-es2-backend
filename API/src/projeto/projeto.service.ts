import { Injectable } from '@nestjs/common';
import { CreateProjetoDto } from './dto/create-projeto.dto';
import { UpdateProjetoDto } from './dto/update-projeto.dto';
import { PrismaService } from 'nestjs-prisma';
import { Prisma } from '@prisma/client';
@Injectable()
export class ProjetoService {
  constructor(private readonly prismaService: PrismaService) {}

  create(createProjetoDto: CreateProjetoDto) {
    return  this.prismaService.projeto.create({
			data: createProjetoDto,
		});;
  }

  private formatProjeto(projeto: any) {
		const { cliente } = projeto;
    projeto.cliente = {
      id: cliente.id_cliente,
      nome: cliente.nome,
      sobrenome: cliente.sobrenome,

    }
		return projeto;
	}

  private default_include: Prisma.projetoInclude = {
    cliente:true,
    time:true,
  }

  async findAll() {
    const projetos: any[] =
			await this.prismaService.projeto.findMany({
      include:this.default_include,
    });

    projetos.forEach((x) => this.formatProjeto(x));
		return { projetos };
  }

  async findOne(id: number) {
    const projeto:any =await  this.prismaService.projeto.findUnique({
      include:this.default_include,
      where:{id},
    });

    return this.formatProjeto(projeto);
  }

  update(id: number, updateProjetoDto: UpdateProjetoDto) {
    return this.prismaService.projeto.update({
			where: { id },
			data: updateProjetoDto,
		});
  }

  remove(id: number) {
    return this.prismaService.projeto.delete({
			where: { id },
		});
  }
}
