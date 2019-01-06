import { expect } from 'chai';
import 'mocha';
import { mock } from 'sinon'
import MemberService from './member.service';
import BasicDAO from '../dao/basic.dao';
import { Member } from '../../../shared/model/member';
import { DB_NAME_MEMBER } from '../../constants/collection-names';

describe('MemberService', () => {
    let service: MemberService;
    let dao = new BasicDAO<Member>(DB_NAME_MEMBER);
    let mockDao = mock(dao);

    beforeEach(() => {
        service = new MemberService(dao);
    })

    it('get usercount should call dao', () => {
        mockDao.expects('count').once().returns(Promise.resolve(3));
        service.getCount()
            .then(res => {
                expect(res).to.equal(3);
            })
            .catch(err => expect(err).to.be.false);
    });

    it('get all users should call dao', () => {
        mockDao.expects('findAll').once().returns(Promise.resolve([]));
        service.getAll()
            .then(res => {
                expect(res).to.equal([]);
            })
            .catch(err => expect(err).to.be.false);
    });

});