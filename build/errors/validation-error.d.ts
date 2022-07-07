import { CustomError } from './custom-error';
import { ValidationError } from 'express-validator';
export declare class ValidationException extends CustomError {
    private error;
    statusCode: number;
    constructor(error: ValidationError[]);
    serializeError: () => {
        errors: {
            message: any;
            field: string;
        }[];
    };
}
