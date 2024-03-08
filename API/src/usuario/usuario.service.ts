import { HttpException, Inject, Injectable } from '@nestjs/common';
import {
	FIREBASE_ADMIN_INJECT,
	FirebaseAdminSDK,
} from '@tfarras/nestjs-firebase-admin';

@Injectable()
export class UsuarioService {
	constructor(
		@Inject(FIREBASE_ADMIN_INJECT) private firebaseAdmin: FirebaseAdminSDK,
	) {}

	async createUserFirebase({
		nome,
		sobrenome,
		email,
		senha,
	}: {
		nome: string;
		sobrenome: string;
		email: string;
		senha: string;
	}) {
		const response = await this.firebaseAdmin.auth().createUser({
			displayName: `${nome} ${sobrenome}`,
			email,
			password: senha,
		});

		return response;
	}

	async remove(uid: string) {
		await this.firebaseAdmin.auth().deleteUser(uid);
		return true;
	}
}
