export const events = {
    notes: {
        insert: 'notes.insert',
        update: 'notes.update',
        remove: 'notes.remove',
    }
};

export const DATA = {
    "events": [
        {
            "event": "notes.insert",
            "enabled": true,
            "senders": [
                "console"
            ]
        },
        {
            "event": "notes.update",
            "enabled": true,
            "senders": [
                "console",
                "SNS1"
            ]
        }
    ],
    "senders": [
        {
            "id": "SNS1",
            "type": "SNS",
            "topicArn": 'arn:aws:sns:us-east-1:062796009403:node-sns-test'
        },
        {
            "id": "webhook2",
            "type": "webhook",
            "url": "http://goasdasdasasdogle.com",
            "method": "GET",
            "default": true
        },
        {
            "id": "webhook1",
            "type": "webhook",
            "url": "http://asasasd.com",
            "method": "GET"
        },
        {
            "id": "console",
            "type": "console"
        }
    ]
};
