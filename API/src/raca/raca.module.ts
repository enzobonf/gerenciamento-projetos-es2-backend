import { Module } from '@nestjs/common';
import { RacaService } from './raca.service';
import { RacaController } from './raca.controller';

@Module({
	controllers: [RacaController],
	providers: [RacaService],
})
export class RacaModule {}
