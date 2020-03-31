export interface IAwsSns {
    PublishToTopic: (message: string, topic: string) => Promise<any>;
}

export default class AwsSns {
    constructor(region?: string) {
    }

    /**
     * Publishing a Message to an SNS Topic
     * @param topic
     * @param message
     * @constructor
     */
    public async PublishToTopic(message: string, topic: string): Promise<any> {

        return new Promise((resolve, reject) => {
            resolve();
        })
    }
}

