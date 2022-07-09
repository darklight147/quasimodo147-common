"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogPublisher = void 0;
const queues_enum_1 = require("../events/queues-enum");
const PublisherAbstract_1 = require("./PublisherAbstract");
class LogPublisher extends PublisherAbstract_1.Publisher {
    constructor() {
        super(...arguments);
        this.queueName = queues_enum_1.LogQueues.LOG_INFO;
    }
}
exports.LogPublisher = LogPublisher;
