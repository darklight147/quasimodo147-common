import { LogQueuePayload } from '../events/LogQueuePayload.interface';
import { LogQueues } from '../events/queues-enum';
import { QueuePublisher } from './QueuePublisherAbstract';
export declare class LogPublisher extends QueuePublisher<LogQueuePayload> {
    queueName: LogQueues;
}
