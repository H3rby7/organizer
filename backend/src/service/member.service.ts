import MemberDAO from "../dao/member.dao";
import { Member } from "../../../shared/model/member";
import logger from '../logger';

class MemberService {

    constructor(private readonly dao: MemberDAO) {

    }

    getMemberCount(): Promise<number> {
        logger.debug('getting user count');
        return this.dao.count();
    }

    getAllMembers(): Promise<Member[]> {
        logger.debug('getting all users');
        return this.dao.findAll();
    }

    getMemberById(id: string): Promise<Member> {
        logger.debug(`Getting member with id: ${id}`)
        return this.dao.findOneById(id);
    }

    createNewMember(member: Member): Promise<Member> {
        if (!member) {
            logger.error(`Requires a member to create`)
            return Promise.reject(`Cannot create member, without a member`);
        };
        logger.debug('creating new member');
        return this.dao.insertMember(member);
    }

    updateMember(id: string, member: Member): Promise<Member> {
        if (!id || !member) {
            logger.error(`Cannot update member with id: ${id} using object: ${JSON.stringify(member)}`)
            return Promise.reject(`Cannot update member with id: ${id} using object: ${JSON.stringify(member)}`);
        };
        return this.dao.updateMember(id, member);
    }

}

export default MemberService;