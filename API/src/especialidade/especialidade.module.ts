import { Module } from '@nestjs/common';
import { EspecialidadeService } from './especialidade.service';
import { EspecialidadeController } from './especialidade.controller';
import { PassportModule } from '@nestjs/passport';
import { AuthModule } from 'src/auth/auth.module';

@Module({
	imports: [
		PassportModule.register({ defaultStrategy: 'firebase' }),
		AuthModule,
	],
	controllers: [EspecialidadeController],
	providers: [EspecialidadeService],
})
export class EspecialidadeModule {}
