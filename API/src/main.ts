import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as morgan from 'morgan';
import helmet from 'helmet';
import { CorsConfig } from './config/cors.config';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	const configService = app.get(ConfigService);

	//app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));
	app.use(morgan('dev'));
	app.use(helmet());

	app.enableCors(CorsConfig);

	const config = new DocumentBuilder()
		.setTitle('API -Template')
		.setDescription('')
		.setVersion('1.0')
		.build();

	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('api', app, document);

	await app.listen(+configService.get('APP_PORT') || 3000);
}
bootstrap();
