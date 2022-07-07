import { Channel, Connection } from 'amqplib';
export declare abstract class Publisher<T> {
    protected connection: Connection;
    abstract queueName: string;
    protected channel: Channel;
    constructor(connection: Connection);
    publish(data: T): Promise<void>;
}
