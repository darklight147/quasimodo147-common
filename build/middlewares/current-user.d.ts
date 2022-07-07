import { NextFunction, Request, Response } from 'express';
export declare const currentUser: (req: Request, res: Response, next: NextFunction) => Promise<void>;
