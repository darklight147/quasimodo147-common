"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogPublisher = void 0;
const queues_enum_1 = require("../events/queues-enum");
const QueuePublisherAbstract_1 = require("./QueuePublisherAbstract");
class LogPublisher extends QueuePublisherAbstract_1.QueuePublisher {
    constructor() {
        super(...arguments);
        this.queueName = queues_enum_1.LogQueues.LOG_INFO;
    }
}
exports.LogPublisher = LogPublisher;
