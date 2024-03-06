import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { LoggedUser } from 'src/auth/entities/logged-user.entity';
import { User } from 'src/auth/user.decorator';

@ApiTags('Usuário')
@UseGuards(AuthGuard())
@Controller('usuario')
export class UsuarioController {
	@Get()
	getUsuarioAtual(@User() user: LoggedUser) {
		return user;
	}
}
