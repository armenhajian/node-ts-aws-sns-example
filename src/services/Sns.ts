import AWS from 'aws-sdk';

const defaultRegion = process.env.AWS_REGION;


export interface IAwsSns {
    PublishToTopic: (message: string, topic: string) => Promise<any>;
}

export default class AwsSns {
    constructor(region?: string) {
        AWS.config.update({region: region || defaultRegion});
    }

    /**
     * Publishing a Message to an SNS Topic
     * @param topic
     * @param message
     * @constructor
     */
    public async PublishToTopic(message: string, topic: string) {
        const params = {
            Message: message,
            TopicArn: topic
        };

        return new AWS.SNS({apiVersion: '2010-03-31'})
            .publish(params)
            .promise();
    }
}
