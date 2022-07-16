"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueuePublisher = void 0;
const PublisherAbstract_1 = require("./PublisherAbstract");
class QueuePublisher extends PublisherAbstract_1.Publisher {
    publish(data) {
        return __awaiter(this, void 0, void 0, function* () {
            this.channel = yield this.connection.createChannel();
            yield this.channel.assertQueue(this.queueName, { durable: true });
            this.channel.sendToQueue(this.queueName, Buffer.from(JSON.stringify(data)));
            console.log('Published expiration event');
        });
    }
}
exports.QueuePublisher = QueuePublisher;
