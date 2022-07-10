import { Publisher } from './PublisherAbstract';

export abstract class QueuePublisher<T> extends Publisher<T> {
	public async publish(data: T) {
		this.channel = await this.connection.createChannel();

		await this.channel.assertQueue(this.queueName, { durable: true });

		this.channel.sendToQueue(this.queueName, Buffer.from(JSON.stringify(data)));

		console.log('Published expiration event');
	}
}
