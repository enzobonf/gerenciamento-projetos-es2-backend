import { Module } from '@nestjs/common';
import { ProjetoService } from './projeto.service';
import { ProjetoController } from './projeto.controller';
import { PassportModule } from '@nestjs/passport';
import { AuthModule } from 'src/auth/auth.module';

@Module({
	imports: [
		PassportModule.register({ defaultStrategy: 'firebase' }),
		AuthModule,
	],
	controllers: [ProjetoController],
	providers: [ProjetoService],
})
export class ProjetoModule {}
