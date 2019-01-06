import BasicDAO from '../dao/basic.dao';
import { Router } from 'express-serve-static-core';
import { ParticipationResourceConfig } from '../../../shared/endpoints/participation';
import BasicResource from './basic.resource';
import ParticipationService from '../service/participation.service';
import { Participation } from "../../../shared/model/participation";
import MemberService from '../service/member.service';
import { Member } from '../../../shared/model/member';
import { Event } from '../../../shared/model/event';
import EventService from '../service/event.service';
import { DB_NAME_MEMBER, DB_NAME_EVENT, DB_NAME_PARTICIPATION } from '../../constants/collection-names';

class ParticipationResource extends BasicResource<Participation> {
  memberService = new MemberService(new BasicDAO<Member>(DB_NAME_MEMBER));
  showService = new EventService(new BasicDAO<Event>(DB_NAME_EVENT));
  service = new ParticipationService(new BasicDAO<Participation>(DB_NAME_PARTICIPATION), this.memberService, this.showService);

  constructor(router: Router) {
    super(ParticipationResourceConfig, router);
  };

}

export default ParticipationResource;