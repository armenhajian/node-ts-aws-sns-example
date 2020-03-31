import supertest from 'supertest';
import { BAD_REQUEST, OK } from 'http-status-codes';
import { Response, SuperTest, Test } from 'supertest';

import app from '@server';
import { pErr } from '@shared/functions';
import AwsSns from '../src/services/Sns.mock';

describe('Sns Routes', () => {

    const apiRoute = '/api/sns/send-event';

    let agent: SuperTest<Test>;

    beforeAll((done) => {
        agent = supertest.agent(app);
        done();
    });

    describe(`"POST:${apiRoute}"`, () => {

        const rightData = {
            "event": "notes.update"
        };
        const wrongData = {
            "event": "notes.undefined"
        };

        it(`should return a status code of "${OK}" if the request the sent event name exists in data constant.`, (done) => {

            spyOn(AwsSns.prototype, 'PublishToTopic').and.returnValue(Promise.resolve());

            agent.post(apiRoute)
                .send(rightData)
                .end((err: Error, res: Response) => {
                    pErr(err);
                    expect(res.status).toBe(OK);
                    expect(res.body.error).toBeUndefined();
                    done();
                });
        });

        it(`should return a status code of "${BAD_REQUEST}" if the request the sent event name is missing in data constant.`, (done) => {

            spyOn(AwsSns.prototype, 'PublishToTopic').and.returnValue(Promise.resolve());

            agent.post(apiRoute)
                .send(wrongData)
                .end((err: Error, res: Response) => {
                    pErr(err);
                    expect(res.status).toBe(BAD_REQUEST);
                    done();
                });
        });
    });
});
