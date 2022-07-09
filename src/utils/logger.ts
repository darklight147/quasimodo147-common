import { Connection } from 'amqplib';
import { LogPublisher } from '../classes/LogPublisher';

export class Logger {
	private _logger!: LogPublisher;

	init(connection: Connection) {
		this._logger = new LogPublisher(connection);
	}

	info(message: string, data?: any) {
		this._logger.publish({
			message,
			level: 'info',
			data,
		});
	}

	error(message: string, data?: any) {
		this._logger.publish({
			message,
			level: 'error',
			data,
		});
	}

	warn(message: string, data?: any) {
		this._logger.publish({
			message,
			level: 'warn',
			data,
		});
	}

	debug(message: string, data?: any) {
		this._logger.publish({
			message,
			level: 'debug',
			data,
		});
	}
}

export default new Logger();
