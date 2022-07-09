"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
const LogPublisher_1 = require("../classes/LogPublisher");
class Logger {
    init(connection) {
        this._logger = new LogPublisher_1.LogPublisher(connection);
    }
    info(message, data) {
        this._logger.publish({
            message,
            level: 'info',
            data,
        });
    }
    error(message, data) {
        this._logger.publish({
            message,
            level: 'error',
            data,
        });
    }
    warn(message, data) {
        this._logger.publish({
            message,
            level: 'warn',
            data,
        });
    }
    debug(message, data) {
        this._logger.publish({
            message,
            level: 'debug',
            data,
        });
    }
}
exports.Logger = Logger;
exports.default = new Logger();
