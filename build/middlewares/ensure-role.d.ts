import { NextFunction, Request, Response } from 'express';
import { ROLE } from '../events/types/Role';
export declare const ensureRole: (roles: ROLE[]) => (req: Request, res: Response, next: NextFunction) => void;
