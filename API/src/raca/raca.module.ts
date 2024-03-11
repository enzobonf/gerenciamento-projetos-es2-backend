import { Module } from '@nestjs/common';
import { RacaService } from './raca.service';
import { RacaController } from './raca.controller';
import { PassportModule } from '@nestjs/passport';
import { AuthModule } from 'src/auth/auth.module';

@Module({
	imports: [
		PassportModule.register({ defaultStrategy: 'firebase' }),
		AuthModule,
	],
	controllers: [RacaController],
	providers: [RacaService],
})
export class RacaModule {}
