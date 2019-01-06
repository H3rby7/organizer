import { expect } from 'chai';
import 'mocha';
import { mock } from 'sinon'
import BasicService from './basic.service';
import BasicDAO from '../dao/basic.dao';
import { Member } from '../../../shared/model/member';

describe('Basic Service', () => {
    let service: BasicService<any>;
    let dao = new BasicDAO<Member>("anything");
    let mockDao = mock(dao);

    beforeEach(() => {
        service = new BasicService('anything', dao);
    })

    it('get count should call dao', () => {
        mockDao.expects('count').once().returns(Promise.resolve(3));
        service.getCount()
            .then(res => {
                expect(res).to.equal(3);
            })
            .catch(err => expect(err).to.be.false);
    });

    it('get all should call dao', () => {
        mockDao.expects('findAll').once().returns(Promise.resolve([]));
        service.getAll()
            .then(res => {
                expect(res).to.equal([]);
            })
            .catch(err => expect(err).to.be.false);
    });

});