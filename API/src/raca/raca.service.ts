import { Injectable } from '@nestjs/common';
import { CreateRacaDto } from './dto/create-raca.dto';
import { UpdateRacaDto } from './dto/update-raca.dto';
import { PrismaService } from 'nestjs-prisma';
import { Prisma } from '@prisma/client';

@Injectable()
export class RacaService {

  constructor(private readonly prismaService: PrismaService) {}

  /*create(createRacaDto: CreateRacaDto) {
    return 'This action adds a new raca';
  }*/

  findAll() {
    return this.prismaService.raca.findMany();
  }

  findOne(id: number) {
    return this.prismaService.raca.findUnique({
      where:{id}
    });
  }

 /* update(id: number, updateRacaDto: UpdateRacaDto) {
    return `This action updates a #${id} raca`;
  }

  remove(id: number) {
    return `This action removes a #${id} raca`;
  }*/
}
