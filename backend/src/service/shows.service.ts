import BasicObjectDAO from '../dao/basic.dao';
import { Show } from "../../../shared/model/show";
import BasicService from './basic.service';

class ShowsService extends BasicService<Show> {

    constructor(dao: BasicObjectDAO<Show>) {
        super('show', dao);
    }

}

export default ShowsService;