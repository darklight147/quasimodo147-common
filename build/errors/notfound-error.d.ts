import { CustomError } from './custom-error';
export declare class NotFoundException extends CustomError {
    private error;
    statusCode: number;
    constructor(error?: string);
    serializeError: () => {
        errors: {
            message: string;
        }[];
    };
}
