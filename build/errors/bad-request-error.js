"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BadRequestException = void 0;
const http_status_codes_1 = require("http-status-codes");
const custom_error_1 = require("./custom-error");
class BadRequestException extends custom_error_1.CustomError {
    constructor(error = 'Bad Request') {
        super(error);
        this.error = error;
        this.statusCode = http_status_codes_1.StatusCodes.BAD_REQUEST;
        this.serializeError = () => {
            return {
                errors: [
                    {
                        message: this.error,
                    },
                ],
            };
        };
        Object.setPrototypeOf(this, BadRequestException.prototype);
    }
}
exports.BadRequestException = BadRequestException;
