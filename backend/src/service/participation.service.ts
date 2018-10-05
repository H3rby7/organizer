import BasicObjectDAO from '../dao/basic.dao';
import { Participation } from "../../../shared/model/participation";
import BasicService from './basic.service';
import MemberService from './member.service';
import ShowsService from './shows.service';
import logger from '../logger';

class ParticipationService extends BasicService<Participation> {

    constructor(
        dao: BasicObjectDAO<Participation>,
        protected readonly memberService: MemberService,
        protected readonly showService: ShowsService,
    ) {
        super('participation', dao);
    }

    createNew(participation: Participation): Promise<Participation> {
        if (!participation) {
            logger.error(`Requires a participation to create`)
            return Promise.reject(`Cannot create a participation, without a data`);
        };
        return this.memberService.getById(participation.memberId)
            .then(member => {
                return this.showService.getById(participation.eventId)
                    .then(show => {
                        return super.createNew(participation);
                    })
                    .catch(err => {
                        logger.error(`Event does not exist`);
                        return Promise.reject(`Event does not exist`)
                    });
            })
            .catch(err => {
                logger.error(`Member does not exist`);
                return Promise.reject('Member does not exist');
            });
    }

}

export default ParticipationService;