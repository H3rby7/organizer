import * as express from 'express'
import MemberService from '../service/member.service';
import MemberDAO from '../dao/member.dao';
import { Router } from 'express-serve-static-core';
import logger from '../logger';
import { Member } from '../../../shared/model/member';

class MemberResource {
  public memberService = new MemberService(new MemberDAO());

  constructor(router: Router, path: string) {
    logger.info(`Binding MemberResource to: '${path}'`)
    router.get(`${path}/count`, this.count.bind(this));
    router.get(`${path}/all`, this.getAll.bind(this));
    router.get(`${path}/:id`, this.getOneById.bind(this));
    router.post(`${path}/add`, this.addNew.bind(this));
    router.post(`${path}/update/:id`, this.update.bind(this));
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

  addNew(req, res) {
    this.memberService.createNewMember(req.body as Member)
      .then(data => res.status(200).json({ users: data }))
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