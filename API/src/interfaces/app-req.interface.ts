import { Request } from 'express';
import { LoggedUser } from 'src/auth/entities/logged-user.entity';

export interface AppRequest extends Request {
	user: LoggedUser;
}
