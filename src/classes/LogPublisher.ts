import { LogQueuePayload } from '../events/LogQueuePayload.interface';
import { LogQueues } from '../events/queues-enum';
import { Publisher } from './PublisherAbstract';

export class LogPublisher extends Publisher<LogQueuePayload> {
	queueName = LogQueues.LOG_INFO;
}
