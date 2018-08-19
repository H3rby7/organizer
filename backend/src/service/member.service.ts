import BasicObjectDAO from '../dao/basic.dao';
import { Member } from "../../../shared/model/member";
import BasicService from './basic.service';

class MemberService extends BasicService<Member> {

    constructor(dao: BasicObjectDAO<Member>) {
        super('member', dao);
    }

}

export default MemberService;