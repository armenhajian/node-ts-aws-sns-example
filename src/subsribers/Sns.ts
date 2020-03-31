import { EventSubscriber, On } from 'event-dispatch';
import { events } from '@shared/constants';
import { ISenderSns } from "@entities/Sender";
import AwsSns, { IAwsSns } from "../services/Sns";
import logger from "@shared/Logger";

@EventSubscriber()
export default class SnsSubscriber {

    private AwsSnsService: IAwsSns;

    constructor() {
        this.AwsSnsService = new AwsSns();
    }

    @On(`sns:${events.notes.insert}`)
    public async onNotesInsert(sender: ISenderSns) {
        logger.info('SnsSubscriber:onNotesInsert');

        const result = await this.AwsSnsService.PublishToTopic(`New note inserted!`, sender.topicArn);
        logger.info(`Message ID: ${result.MessageId}`);
    }

    @On(`sns:${events.notes.update}`)
    public async onNotesUpdate(sender: ISenderSns) {
        logger.info('SnsSubscriber:onNotesUpdate');

        const result = await this.AwsSnsService.PublishToTopic(`Note has updated!`, sender.topicArn);
        logger.info(`Message ID: ${result.MessageId}`);
    }
}
