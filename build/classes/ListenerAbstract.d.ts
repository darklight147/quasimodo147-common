import { Channel, Connection, ConsumeMessage } from 'amqplib';
export declare abstract class Listener {
    private connection;
    abstract queueName: string;
    abstract onMessage: (msg: ConsumeMessage | null) => Promise<void>;
    protected channel: Channel;
    constructor(connection: Connection);
    listen(): Promise<void>;
}
