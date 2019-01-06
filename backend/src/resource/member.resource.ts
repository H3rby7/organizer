import MemberService from '../service/member.service';
import BasicDAO from '../dao/basic.dao';
import { Router } from 'express-serve-static-core';
import { Member } from '../../../shared/model/member';
import { MemberResourceConfig } from '../../../shared/endpoints/member';
import BasicResource from './basic.resource';
import { DB_NAME_MEMBER } from '../../constants/collection-names';

class MemberResource extends BasicResource<Member> {
  public service = new MemberService(new BasicDAO<Member>(DB_NAME_MEMBER));

  constructor(router: Router) {
    super(MemberResourceConfig, router);
  };

}

export default MemberResource;