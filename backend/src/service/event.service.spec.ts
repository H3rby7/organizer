import { expect } from 'chai';
import 'mocha';
import { mock } from 'sinon'
import EventService from './event.service';
import BasicDAO from '../dao/basic.dao';
import { Event } from '../../../shared/model/event';
import { DB_NAME_EVENT } from '../../constants/collection-names';

describe('Event Service', () => {
    let service: EventService;
    let dao = new BasicDAO<Event>(DB_NAME_EVENT);
    let mockDao = mock(dao);

    beforeEach(() => {
        service = new EventService(dao);
    })

    it('get showcount should call dao', () => {
        mockDao.expects('count').once().returns(Promise.resolve(3));
        service.getCount()
            .then(res => {
                expect(res).to.equal(3);
            })
            .catch(err => expect(err).to.be.false);
    });

    it('get all shows should call dao', () => {
        mockDao.expects('findAll').once().returns(Promise.resolve([]));
        service.getAll()
            .then(res => {
                expect(res).to.equal([]);
            })
            .catch(err => expect(err).to.be.false);
    });

});