import { expect } from 'chai';
import 'mocha';
import { mock } from 'sinon'
import ParticipationService from './participation.service';
import BasicDAO from '../dao/basic.dao';
import { Participation } from '../../../shared/model/participation';
import MemberService from './member.service';
import { Member } from '../../../shared/model/member';
import EventService from './event.service';
import { Event } from '../../../shared/model/event';
import { DB_NAME_MEMBER, DB_NAME_EVENT, DB_NAME_PARTICIPATION } from '../../constants/collection-names';

describe('ParticipationService', () => {
    let service: ParticipationService;
    const memberService = new MemberService(new BasicDAO<Member>(DB_NAME_MEMBER));
    const eventService = new EventService(new BasicDAO<Event>(DB_NAME_EVENT));
    let dao = new BasicDAO<Participation>(DB_NAME_PARTICIPATION);
    let mockDao = mock(dao);

    beforeEach(() => {
        service = new ParticipationService(dao, memberService, eventService);
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