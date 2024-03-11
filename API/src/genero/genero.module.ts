import { Module } from '@nestjs/common';
import { GeneroService } from './genero.service';
import { GeneroController } from './genero.controller';
import { PassportModule } from '@nestjs/passport';
import { AuthModule } from 'src/auth/auth.module';

@Module({
	imports: [
		PassportModule.register({ defaultStrategy: 'firebase' }),
		AuthModule,
	],
	controllers: [GeneroController],
	providers: [GeneroService],
})
export class GeneroModule {}
