import { Injectable } from '@nestjs/common';
import { CreateTimeDto } from './dto/create-time.dto';
import { UpdateTimeDto } from './dto/update-time.dto';
import { PrismaService } from 'nestjs-prisma';
import { Prisma } from '@prisma/client';

@Injectable()
export class TimeService {
	constructor(private readonly prismaService: PrismaService) {}

	private default_include: Prisma.timeInclude = {
		time_has_profissional: {
			select: {
				profissional: {
					include: {
						especialidade: true,
					},
				},
			},
		},
	};

	private formatTime(time: any) {
		if (time.time_has_profissional) {
			time.profissionais = time.time_has_profissional.map(
				(x: any) => x.profissional,
			);
			delete time.time_has_profissional;
		}

		return time;
	}

	async create(createTimeDto: CreateTimeDto) {
		const timeDb = await this.prismaService.$transaction(async (ctx) => {
			const time = await ctx.time.create({
				data: {
					nome: createTimeDto.nome,
				},
			});

			let profissionais = [];

			if (createTimeDto.ids_profissionais) {
				const time_profissionais = createTimeDto.ids_profissionais.map(
					(x) => ({
						id_profissional: x,
						id_time: time.id,
					}),
				);

				await ctx.time_has_profissional.createMany({
					data: time_profissionais,
				});

				profissionais = await ctx.profissional.findMany({
					where: {
						id: {
							in: createTimeDto.ids_profissionais,
						},
					},
					include: {
						especialidade: true,
					},
				});
			}

			return { ...time, profissionais };
		});

		return this.formatTime(timeDb);
	}

	async findAll() {
		const times = await this.prismaService.time.findMany({
			include: this.default_include,
		});

		times.forEach((time) => this.formatTime(time));
		return { times };
	}

	async findOne(id: number) {
		const time = await this.prismaService.time.findUnique({
			where: { id },
			include: this.default_include,
		});

		return this.formatTime(time);
	}

	async update(id: number, updateTimeDto: UpdateTimeDto) {
		const ids_profissionais = updateTimeDto.ids_profissionais;
		delete updateTimeDto.ids_profissionais;

		await this.prismaService.$transaction([
			this.prismaService.time.update({
				data: updateTimeDto,
				where: { id },
			}),
			...(await this.setProfissionaisTime(id, ids_profissionais)),
		]);

		return this.findOne(id);
	}

	remove(id: number) {
		return this.prismaService.$transaction([
			this.prismaService.time_has_profissional.deleteMany({
				where: {
					id_time: id,
				},
			}),
			this.prismaService.time.delete({
				where: { id },
			}),
		]);
	}

	async setProfissionaisTime(id_time: number, ids_profissionais: number[]) {
		const transactionList = [];

		if (ids_profissionais) {
			const time_has_profissionais: any[] = (
				await this.prismaService.time_has_profissional.findMany({
					where: {
						id_time,
					},
				})
			).map((x) => x.id_profissional);

			if (time_has_profissionais) {
				const listaDelete = time_has_profissionais.filter(
					(id_profissional) =>
						!ids_profissionais.includes(id_profissional),
				);

				const listaInsert = ids_profissionais
					.filter(
						(id_profissional) =>
							!time_has_profissionais.includes(id_profissional),
					)
					.map((id_profissional) => {
						return {
							id_time: id_time,
							id_profissional: id_profissional,
						};
					});

				if (listaDelete.length) {
					transactionList.push(
						this.prismaService.time_has_profissional.deleteMany({
							where: {
								id_time,
								id_profissional: {
									in: listaDelete,
								},
							},
						}),
					);
				}

				if (listaInsert.length) {
					transactionList.push(
						this.prismaService.time_has_profissional.createMany({
							data: listaInsert,
						}),
					);
				}
			}
		}
		return transactionList;
	}
}
