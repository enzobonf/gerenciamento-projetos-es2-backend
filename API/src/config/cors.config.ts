import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

const originsWhitelist = ['http://localhost:4200', 'http://localhost:5200'];

export const CorsConfig: CorsOptions = {
	origin(origin, callback) {
		callback(null, originsWhitelist.indexOf(origin) !== -1);
	},
	credentials: true,
};
