import { Channel, Connection } from 'amqplib';

export abstract class Publisher<T> {
	abstract queueName: string;

	protected channel!: Channel;

	constructor(protected connection: Connection) {}

	public abstract publish(data: T): Promise<void>;
}
