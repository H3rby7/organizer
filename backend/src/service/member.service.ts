import BasicObjectDAO from '../dao/basic.dao';
import { Member } from "../../../shared/model/member";
import BasicService from './basic.service';
import { DB_NAME_MEMBER } from '../../constants/collection-names';

class MemberService extends BasicService<Member> {

    constructor(dao: BasicObjectDAO<Member>) {
        super(DB_NAME_MEMBER, dao);
    }

}

export default MemberService;