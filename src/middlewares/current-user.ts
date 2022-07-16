import { NextFunction, Request, Response } from 'express';
import jwtService from '../utils/jwt.service';

export const currentUser = async (
	req: Request,
	res: Response,
	next: NextFunction
) => {
	const token = req.session!.jwt;

	req.currentUser = await jwtService.verify(token);

	next();
};
