import { Controller, Get, Inject } from '@nestjs/common';
import {
	FirebaseAdminSDK,
	FIREBASE_ADMIN_INJECT,
} from '@tfarras/nestjs-firebase-admin';
import { AppService } from './app.service';

@Controller()
export class AppController {
	constructor(
		private readonly appService: AppService,
		@Inject(FIREBASE_ADMIN_INJECT)
		private readonly fireSDK: FirebaseAdminSDK,
	) {}

	@Get()
	getHello(): string {
		return this.appService.getHello();
	}

	@Get('token')
	async getToken() {
		const token = await this.fireSDK
			.auth()
			.createCustomToken('p3FLzI2Y85X9tK7hpdLaoSDQKv13');
		return { token };
	}
}
