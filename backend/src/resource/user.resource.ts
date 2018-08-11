import * as express from 'express'
import MemberService from '../service/member.service';
import MemberDAO from '../dao/member.dao';
import { Router } from 'express-serve-static-core';

class UserResource {
  public memberService = new MemberService(new MemberDAO());

  constructor(router: Router, path: string) {
    router.get(`${path}/count`, this.count.bind(this));
    router.get(`${path}/all`, this.getAll.bind(this));
  };

  count(req, res) {
    this.memberService.getUserCount()
      .then(data => res.status(200).json({ count: data }))
      .catch(e => {
        res.sendStatus(500);
        console.log(e);
      });
  }

  getAll(req, res) {
    this.memberService.getAllUsers()
      .then(data => res.status(200).json({ users: data }))
      .catch(e => {
        res.sendStatus(500);
        console.log(e);
      });
  }

}

export default UserResource;