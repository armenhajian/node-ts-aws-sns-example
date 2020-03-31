import { Request, Response, Router } from 'express';
import { OK } from 'http-status-codes';
import { EventDispatcher } from "event-dispatch";
import { DATA } from "@shared/constants";
import logger from "@shared/Logger";

const eventDispatcher = new EventDispatcher();

const router = Router();

/**
 * Fire event for sending sns notification
 */
router.post('/send-event', async (req: Request, res: Response) => {

    const eventData = DATA.events.find(n => n.event === req.body.event);
    if (!eventData) return res.status(400).send('Wrong event name or missing event data');

    eventData.senders
        .map(sender => DATA.senders.find(s => s.id === sender))
        .forEach(sender => {
            if (!sender) return;
            logger.info(`${sender.type.toLowerCase()}:${req.body.event}`);
            eventDispatcher.dispatch(`${sender.type.toLowerCase()}:${req.body.event}`, sender);
        });

    return res.status(OK).send('OK');
});

export default router;
