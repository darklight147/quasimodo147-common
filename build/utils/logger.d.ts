import { Connection } from 'amqplib';
export declare class Logger {
    private _logger;
    init(connection: Connection): void;
    info(message: string, data?: any): void;
    error(message: string, data?: any): void;
    warn(message: string, data?: any): void;
    debug(message: string, data?: any): void;
}
declare const _default: Logger;
export default _default;
