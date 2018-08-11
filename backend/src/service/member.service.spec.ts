import { expect } from 'chai';
import 'mocha';
import { mock } from 'sinon'
import MemberService from './member.service';
import MemberDAO from '../dao/member.dao';
import DbService from '../db.service';

describe('MemberService', () => {
    let service: MemberService;
    let dao = new MemberDAO();
    let mockDao = mock(dao);

    beforeEach(() => {
        service = new MemberService(dao);
    })

    it('get usercount should call dao', () => {
        mockDao.expects('count').once().returns(Promise.resolve(3));
        service.getUserCount()
            .then(res => {
                expect(res).to.equal(3);
            })
            .catch(err => expect(err).to.be.false);
    });

    it('get all users should call dao', () => {
        mockDao.expects('findAll').once().returns(Promise.resolve([]));
        service.getAllUsers()
            .then(res => {
                expect(res).to.equal([]);
            })
            .catch(err => expect(err).to.be.false);
    });

});