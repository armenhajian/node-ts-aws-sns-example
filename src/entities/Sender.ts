import { HTTPMethod } from 'http-method-enum';

export enum SenderTypes {
    SNS = "SNS",
    WEBHOOK = "webhook",
    CONSOLE = "console",
}

export interface ISender {
    id: string;
    type: SenderTypes,
}

export interface ISenderSns extends ISender {
    type: SenderTypes.SNS,
    topicArn: string,
}

export interface ISenderWebhook extends ISender {
    type: SenderTypes.WEBHOOK,
    url: string,
    method: HTTPMethod,
    default: boolean,
}

export interface ISenderConsole extends ISender {
    type: SenderTypes.CONSOLE,
}
