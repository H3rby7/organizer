import { expect } from 'chai';
import 'mocha';
import { mock } from 'sinon'
import ParticipationService from './participation.service';
import BasicDAO from '../dao/basic.dao';
import { Participation } from '../../../shared/model/participation';
import MemberService from './member.service';
import { Member } from '../../../shared/model/member';
import ShowsService from './shows.service';
import { Show } from '../../../shared/model/show';

describe('ParticipationService', () => {
    let service: ParticipationService;
    const memberService = new MemberService(new BasicDAO<Member>('members'));
    const showsService = new ShowsService(new BasicDAO<Show>('shows'));
    let dao = new BasicDAO<Participation>("participation");
    let mockDao = mock(dao);

    beforeEach(() => {
        service = new ParticipationService(dao, memberService, showsService);
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