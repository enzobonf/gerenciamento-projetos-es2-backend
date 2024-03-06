import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { LoggedUser } from './entities/logged-user.entity';

export const User = createParamDecorator(
	(key: keyof LoggedUser, ctx: ExecutionContext) => {
		const request = ctx.switchToHttp().getRequest();
		const user: LoggedUser = request.user;

		return key ? user?.[key] : user;
	},
);
