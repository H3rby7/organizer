import MemberDAO from "../dao/member.dao";
import { Member } from "../../../shared/model/member";

class MemberService {

    constructor(private readonly dao: MemberDAO) {

    }

    getUserCount(): Promise<number> {
        return this.dao.count();
    }

    getAllUsers(): Promise<Member[]> {
        return this.dao.findAll();
    }

}

export default MemberService;