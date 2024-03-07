import { Injectable } from '@nestjs/common';
import { CreateProfissionalDto } from './dto/create-profissional.dto';
import { UpdateProfissionalDto } from './dto/update-profissional.dto';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class ProfissionalService {
	constructor(private readonly prismaService: PrismaService) {}

	create(createProfissionalDto: CreateProfissionalDto) {
		return this.prismaService.profissional.create({
			data: createProfissionalDto,
		});
	}

	findAll() {
		return `This action returns all profissional`;
	}

	findOne(id: number) {
		return `This action returns a #${id} profissional`;
	}

	update(id: number, updateProfissionalDto: UpdateProfissionalDto) {
		return `This action updates a #${id} profissional`;
	}

	remove(id: number) {
		return `This action removes a #${id} profissional`;
	}
}
