import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt } from 'passport-jwt';
import {
	FirebaseAuthStrategy,
	FirebaseUser,
} from '@tfarras/nestjs-firebase-auth';
import { LoggedUser } from '../entities/logged-user.entity';
import { PrismaService } from 'nestjs-prisma';

@Injectable()
export class FirebaseStrategy extends PassportStrategy(
	FirebaseAuthStrategy,
	'firebase',
) {
	public constructor(private readonly prismaService: PrismaService) {
		super({
			extractor: ExtractJwt.fromAuthHeaderAsBearerToken(),
		});
	}

	async validate(payload: FirebaseUser): Promise<LoggedUser> {
		console.log(payload);

		const usuario = await this.prismaService.usuario.findUnique({
			where: { id: payload.uid },
			select: {
				id: true,
				nome: true,
				email: true,
				id_tipo_usuario: true,
			},
		});
		return usuario;
	}
}
