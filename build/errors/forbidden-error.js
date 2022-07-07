"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ForbiddenException = void 0;
const http_status_codes_1 = require("http-status-codes");
const custom_error_1 = require("./custom-error");
class ForbiddenException extends custom_error_1.CustomError {
    constructor(error = 'Forbidden') {
        super(error);
        this.error = error;
        this.statusCode = http_status_codes_1.StatusCodes.FORBIDDEN;
        this.serializeError = () => {
            return {
                errors: [
                    {
                        message: this.error,
                    },
                ],
            };
        };
        Object.setPrototypeOf(this, ForbiddenException.prototype);
    }
}
exports.ForbiddenException = ForbiddenException;
