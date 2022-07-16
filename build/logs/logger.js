"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const winston_1 = __importDefault(require("winston"));
class Logger {
    constructor() {
        this._logger = winston_1.default.createLogger({
            level: 'info',
            format: winston_1.default.format.json(),
            defaultMeta: { service: process.env.SERVICE_NAME },
            transports: [
                new winston_1.default.transports.File({ filename: 'error.log', level: 'error' }),
                new winston_1.default.transports.File({ filename: 'combined.log' }),
            ],
        });
        if (process.env.NODE_ENV !== 'production') {
            this._logger.add(new winston_1.default.transports.Console({
                format: winston_1.default.format.simple(),
            }));
        }
    }
}
exports.Logger = Logger;
exports.default = new Logger();
