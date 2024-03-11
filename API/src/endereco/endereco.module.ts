import { Module } from '@nestjs/common';
import { EnderecoService } from './endereco.service';
import { EnderecoController } from './endereco.controller';
import { PassportModule } from '@nestjs/passport';
import { AuthModule } from 'src/auth/auth.module';

@Module({
	imports: [
		PassportModule.register({ defaultStrategy: 'firebase' }),
		AuthModule,
	],
	controllers: [EnderecoController],
	providers: [EnderecoService],
})
export class EnderecoModule {}
