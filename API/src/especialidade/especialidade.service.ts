import { Injectable } from '@nestjs/common';
import { CreateEspecialidadeDto } from './dto/create-especialidade.dto';
import { UpdateEspecialidadeDto } from './dto/update-especialidade.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class EspecialidadeService {
	constructor(private readonly prismaService: PrismaService) {}
	/*
  create(createEspecialidadeDto: CreateEspecialidadeDto) {
    return 'This action adds a new especialidade';
  }*/

	findAll() {
		return this.prismaService.especialidade.findMany();
	}

	findOne(id: number) {
		return this.prismaService.especialidade.findUnique({
			where: { id },
		});
	}
	/*
  update(id: number, updateEspecialidadeDto: UpdateEspecialidadeDto) {
    return `This action updates a #${id} especialidade`;
  }

  remove(id: number) {
    return `This action removes a #${id} especialidade`;
  }*/
}
