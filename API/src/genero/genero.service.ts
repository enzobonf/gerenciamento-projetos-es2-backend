import { Injectable } from '@nestjs/common';
import { CreateGeneroDto } from './dto/create-genero.dto';
import { UpdateGeneroDto } from './dto/update-genero.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class GeneroService {
	constructor(private readonly prismaService: PrismaService) {}
	/*
  create(createGeneroDto: CreateGeneroDto) {
    return 'This action adds a new genero';
  }*/

	async findAll() {
		const generos = await this.prismaService.genero.findMany();
		return { generos };
	}

	findOne(id: number) {
		return this.prismaService.genero.findUnique({
			where: { id },
		});
	}
	/*
  update(id: number, updateGeneroDto: UpdateGeneroDto) {
    return `This action updates a #${id} genero`;
  }

  remove(id: number) {
    return `This action removes a #${id} genero`;
  }*/
}
