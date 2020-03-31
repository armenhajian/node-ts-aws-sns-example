import { EventSubscriber, On } from 'event-dispatch';
import { events } from '@shared/constants';
import { ISenderConsole } from "@entities/Sender";
import logger from "@shared/Logger";


@EventSubscriber()
export default class ConsoleSubscriber {

    @On(`console:${events.notes.insert}`)
    public async onNotesInsert(sender: ISenderConsole) {
        logger.info('ConsoleSubscriber:onNotesInsert', sender);
    }

    @On(`console:${events.notes.update}`)
    public async onNotesUpdate(sender: ISenderConsole) {
        logger.info('ConsoleSubscriber:onNotesUpdate', sender);
    }

}
