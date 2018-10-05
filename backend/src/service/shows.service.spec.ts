import { expect } from 'chai';
import 'mocha';
import { mock } from 'sinon'
import ShowService from './shows.service';
import BasicDAO from '../dao/basic.dao';
import { Show } from '../../../shared/model/show';

describe('ShowService', () => {
    let service: ShowService;
    let dao = new BasicDAO<Show>("show");
    let mockDao = mock(dao);

    beforeEach(() => {
        service = new ShowService(dao);
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