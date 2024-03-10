import { Controller, Get, Param, UseGuards, UsePipes } from '@nestjs/common';
import { EnderecoService } from './endereco.service';
import { ApiTags } from '@nestjs/swagger';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Endereco')
@Controller('endereco')
//@UseGuards(AuthGuard())
export class EnderecoController {
	constructor(private readonly enderecoService: EnderecoService) {}

	@Get('cep/:cep')
	findByCep(@Param('cep') cep: string) {
		return this.enderecoService.findByCep(cep);
	}
}
