import BasicDAO from '../dao/basic.dao';
import { Router } from 'express-serve-static-core';
import { ParticipationResourceConfig } from '../../../shared/endpoints/participation';
import BasicResource from './basic.resource';
import ParticipationService from '../service/participation.service';
import { Participation } from "../../../shared/model/participation";
import MemberService from '../service/member.service';
import { Member } from '../../../shared/model/member';
import { Show } from '../../../shared/model/show';
import ShowsService from '../service/shows.service';

class ParticipationResource extends BasicResource<Participation> {
  memberService = new MemberService(new BasicDAO<Member>('members'));
  showService = new ShowsService(new BasicDAO<Show>('shows'));
  public service = new ParticipationService(new BasicDAO<Participation>('participation'), this.memberService, this.showService);

  constructor(router: Router) {
    super(ParticipationResourceConfig, router);
  };

}

export default ParticipationResource;