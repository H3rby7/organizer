import MemberService from '../service/member.service';
import BasicDAO from '../dao/basic.dao';
import { Router } from 'express-serve-static-core';
import { Member } from '../../../shared/model/member';
import { MemberResourceConfig } from '../../../shared/endpoints/member';
import BasicResource from './basic.resource';

class MemberResource extends BasicResource<Member> {
  public service = new MemberService(new BasicDAO<Member>('members'));

  constructor(router: Router) {
    super(MemberResourceConfig, router);
  };

}

export default MemberResource;