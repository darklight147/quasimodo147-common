import { LogQueuePayload } from '../events/LogQueuePayload.interface';
import { LogQueues } from '../events/queues-enum';
import { Publisher } from './PublisherAbstract';
export declare class LogPublisher extends Publisher<LogQueuePayload> {
    queueName: LogQueues;
}
