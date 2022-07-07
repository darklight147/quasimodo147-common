"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthorizedException = void 0;
const custom_error_1 = require("./custom-error");
const http_status_codes_1 = require("http-status-codes");
class UnauthorizedException extends custom_error_1.CustomError {
    constructor(error = 'Unauhthorized') {
        super(error);
        this.error = error;
        this.statusCode = http_status_codes_1.StatusCodes.UNAUTHORIZED;
        this.serializeError = () => {
            return {
                errors: [
                    {
                        message: this.error,
                    },
                ],
            };
        };
        Object.setPrototypeOf(this, UnauthorizedException.prototype);
    }
}
exports.UnauthorizedException = UnauthorizedException;
