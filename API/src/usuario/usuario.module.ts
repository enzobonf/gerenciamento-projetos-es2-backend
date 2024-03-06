import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
import { PassportModule } from '@nestjs/passport';

@Module({
	imports: [PassportModule.register({ defaultStrategy: 'firebase' })],
	controllers: [UsuarioController],
	providers: [],
})
export class UsuarioModule {}
