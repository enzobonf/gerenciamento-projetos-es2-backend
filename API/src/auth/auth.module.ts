import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { FirebaseStrategy } from './guards/firebase.strategy';

@Module({
	imports: [PassportModule],
	providers: [FirebaseStrategy],
	exports: [FirebaseStrategy],
})
export class AuthModule {}
