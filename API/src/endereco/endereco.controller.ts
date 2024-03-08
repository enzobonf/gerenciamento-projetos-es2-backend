import { Controller, Get, Param } from '@nestjs/common';
import { EnderecoService } from './endereco.service';

@Controller('enderecos')
export class EnderecoController {
	constructor(private readonly enderecoService: EnderecoService) {}

	@Get('cep/:cep')
	findByCep(@Param('cep') cep: string) {
		return this.enderecoService.findByCep(cep);
	}
}
