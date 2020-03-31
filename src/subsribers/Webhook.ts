import { EventSubscriber, On } from 'event-dispatch';
import { events } from '@shared/constants';
import { ISenderWebhook } from "@entities/Sender";
import logger from "@shared/Logger";


@EventSubscriber()
export default class WebhookSubscriber {

    @On(`webhook:${events.notes.insert}`)
    public async onNotesInsert(sender: ISenderWebhook) {
        logger.info('WebhookSubscriber:onNotesInsert');

        const result = await fetch(sender.url, {
            method: sender.method,
            headers: {'Content-Type': 'application/json'},
        }).then(res => res.json());

        logger.info(`result - ${sender.url}`, result);
    }

    @On(`webhook:${events.notes.update}`)
    public async onNotesUpdate(sender: ISenderWebhook) {
        logger.info('WebhookSubscriber:onNotesUpdate');

        const result = await fetch(sender.url, {
            method: sender.method,
            headers: {'Content-Type': 'application/json'},
        }).then(res => res.json());

        logger.info(`result - ${sender.url}`, result);
    }
}
