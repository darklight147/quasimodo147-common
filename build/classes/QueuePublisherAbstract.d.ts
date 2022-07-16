import { Publisher } from './PublisherAbstract';
export declare abstract class QueuePublisher<T> extends Publisher<T> {
    publish(data: T): Promise<void>;
}
