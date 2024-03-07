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
		const usuario: LoggedUser = {
			id: payload.uid,
			email: payload.email,
		};
		return usuario;
	}
}
