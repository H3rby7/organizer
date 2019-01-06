import BasicObjectDAO from '../dao/basic.dao';
import { Participation } from "../../../shared/model/participation";
import BasicService from './basic.service';
import MemberService from './member.service';
import EventService from './event.service';
import logger from '../logger';
import { DB_NAME_PARTICIPATION } from '../../constants/collection-names';

class ParticipationService extends BasicService<Participation> {

    constructor(
        dao: BasicObjectDAO<Participation>,
        protected readonly memberService: MemberService,
        protected readonly eventService: EventService,
    ) {
        super(DB_NAME_PARTICIPATION, dao);
    }

    createNew(participation: Participation): Promise<Participation> {
        if (!participation) {
            logger.error(`Requires a participation to create`)
            return Promise.reject(`Cannot create a participation, without a data`);
        };
        return this.memberService.getById(participation.memberId)
            .then(member => {
                return this.checkForEventExistence(participation)
                    .then(() => {
                        return super.createNew(participation);
                    })
                    .catch(() => {
                        logger.error(`Event does not exist`);
                        return Promise.reject(`Event does not exist`);
                    });
            })
            .catch(err => {
                logger.error(`Member does not exist`);
                return Promise.reject('Member does not exist');
            });
    }

    checkForEventExistence(participation: Participation): Promise<boolean> {
        return this.eventService.getById(participation.eventId)
            .then(show => {
                return true;
            })
            .catch(err => {
                return false;
            });
    }

}

export default ParticipationService;