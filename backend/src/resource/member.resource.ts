import * as express from 'express'
import MemberService from '../service/member.service';
import MemberDAO from '../dao/member.dao';
import { Router } from 'express-serve-static-core';
import logger from '../logger';
import { Member } from '../../../shared/model/member';
import { MemberResourceConfig } from '../../../shared/endpoints/member';

class MemberResource {
  public memberService = new MemberService(new MemberDAO());

  constructor(router: Router) {
    const path = MemberResourceConfig.baseUrl;
    const ePs = MemberResourceConfig.endpoints;
    logger.info(`Binding MemberResource to: '${path}'`)
    router[ePs.ALL.method](`${path}${ePs.ALL.path}`, this.getAll.bind(this));
    router[ePs.COUNT.method](`${path}${ePs.COUNT.path}`, this.count.bind(this));
    router[ePs.ADD.method](`${path}${ePs.ADD.path}`, this.addNew.bind(this));
    router[ePs.GET_BY_ID.method](`${path}${ePs.GET_BY_ID.path}`, this.getOneById.bind(this));
    router[ePs.UPDATE.method](`${path}${ePs.UPDATE.path}`, this.update.bind(this));
    router[ePs.DELETE.method](`${path}${ePs.DELETE.path}`, this.deleteOneById.bind(this));
  };

  count(req, res) {
    this.memberService.getMemberCount()
      .then(data => res.status(200).json(data))
      .catch(e => {
        res.sendStatus(500);
        logger.error(e);
      });
  }

  getAll(req, res) {
    this.memberService.getAllMembers()
      .then(data => res.status(200).json(data))
      .catch(e => {
        res.sendStatus(500);
        logger.error(e);
      });
  }

  getOneById(req, res) {
    this.memberService.getMemberById(req.params.id)
      .then(data => res.status(200).json(data))
      .catch(e => {
        res.sendStatus(500);
        logger.error(e);
      });
  }

  deleteOneById(req, res) {
    this.memberService.deleteMemberById(req.params.id)
      .then(data => res.status(200).json(data))
      .catch(e => {
        res.sendStatus(500);
        logger.error(e);
      });
  }

  addNew(req, res) {
    this.memberService.createNewMember(req.body as Member)
      .then(data => res.status(200).json(data))
      .catch(e => {
        res.sendStatus(500);
        logger.error(e);
      });
  }

  update(req, res) {
    this.memberService.updateMember(req.params.id, req.body as Member)
      .then(data => res.status(200).json({ users: data }))
      .catch(e => {
        res.sendStatus(500);
        logger.error(e);
      });
  }

}

export default MemberResource;