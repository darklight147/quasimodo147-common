import { Publisher } from './PublisherAbstract';
export declare abstract class ExchangePublisher<T> extends Publisher<T> {
    abstract exchangeName: string;
    publish(data: T): Promise<void>;
}
