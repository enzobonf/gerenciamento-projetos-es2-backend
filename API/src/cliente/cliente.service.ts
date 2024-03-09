import { Injectable } from '@nestjs/common';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';
import { PrismaService } from 'nestjs-prisma';
import { Prisma } from '@prisma/client';

@Injectable()
export class ClienteService {
	constructor(private readonly prismaService: PrismaService) {}

	private default_include: Prisma.clienteInclude = {
		genero: true,
		raca: true,
	};

	private formatCliente(cliente) {
		const { raca, genero } = cliente;
		cliente.raca = raca.identificacao;
		cliente.genero = genero.identificacao;

		return cliente;
	}

	async findAll() {
		const clientes: any[] = await this.prismaService.cliente.findMany({
			include: this.default_include,
		});

		clientes.forEach((x) => this.formatCliente(x));
		return { clientes };
	}

	async findOne(id: number) {
		const cliente: any = await this.prismaService.cliente.findUnique({
			include: this.default_include,
			where: { id },
		});

		return this.formatCliente(cliente);
	}
	/*
  create(createClienteDto: CreateClienteDto) {
    return 'This action adds a new cliente';
  }

  update(id: number, updateClienteDto: UpdateClienteDto) {
    return `This action updates a #${id} cliente`;
  }

  remove(id: number) {
    return `This action removes a #${id} cliente`;
  }*/
}
