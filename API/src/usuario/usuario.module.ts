import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
import { PassportModule } from '@nestjs/passport';
import { AuthModule } from 'src/auth/auth.module';

@Module({
	imports: [
		PassportModule.register({ defaultStrategy: 'firebase' }),
		AuthModule,
	],
	controllers: [UsuarioController],
	providers: [],
})
export class UsuarioModule {}
