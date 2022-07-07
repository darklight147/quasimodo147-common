"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidationException = void 0;
const custom_error_1 = require("./custom-error");
const http_status_codes_1 = require("http-status-codes");
class ValidationException extends custom_error_1.CustomError {
    constructor(error) {
        super('Validation Error');
        this.error = error;
        this.statusCode = http_status_codes_1.StatusCodes.UNPROCESSABLE_ENTITY;
        this.serializeError = () => {
            return {
                errors: this.error.map((err) => {
                    return {
                        message: err.msg,
                        field: err.param,
                    };
                }),
            };
        };
        Object.setPrototypeOf(this, ValidationException.prototype);
    }
}
exports.ValidationException = ValidationException;
