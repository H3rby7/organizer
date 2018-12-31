import BasicObjectDAO from '../dao/basic.dao';
import { Event } from "../../../shared/model/event";
import BasicService from './basic.service';

class EventService extends BasicService<Event> {

    constructor(dao: BasicObjectDAO<Event>) {
        super('event', dao);
    }

}

export default EventService;