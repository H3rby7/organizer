import BasicObjectDAO from '../dao/basic.dao';
import { Event } from "../../../shared/model/event";
import BasicService from './basic.service';
import { DB_NAME_EVENT } from '../../constants/collection-names';

class EventService extends BasicService<Event> {

    constructor(dao: BasicObjectDAO<Event>) {
        super(DB_NAME_EVENT, dao);
    }

}

export default EventService;