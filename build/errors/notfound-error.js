"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundException = void 0;
const custom_error_1 = require("./custom-error");
const http_status_codes_1 = require("http-status-codes");
class NotFoundException extends custom_error_1.CustomError {
    constructor(error = 'Not Found Error') {
        super(error);
        this.error = error;
        this.statusCode = http_status_codes_1.StatusCodes.NOT_FOUND;
        this.serializeError = () => {
            return {
                errors: [
                    {
                        message: this.error,
                    },
                ],
            };
        };
        Object.setPrototypeOf(this, NotFoundException.prototype);
    }
}
exports.NotFoundException = NotFoundException;
