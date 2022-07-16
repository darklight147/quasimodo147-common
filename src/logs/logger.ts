import winston from 'winston';

export class Logger {
	private _logger: winston.Logger;

	constructor() {
		this._logger = winston.createLogger({
			level: 'info',
			format: winston.format.json(),
			defaultMeta: { service: process.env.SERVICE_NAME },
			transports: [
				new winston.transports.File({ filename: 'error.log', level: 'error' }),
				new winston.transports.File({ filename: 'combined.log' }),
			],
		});

		if (process.env.NODE_ENV !== 'production') {
			this._logger.add(
				new winston.transports.Console({
					format: winston.format.simple(),
				})
			);
		}
	}
}

export default new Logger();
