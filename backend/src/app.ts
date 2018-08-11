import * as express from 'express'
import MemberService from './service/member.service';
import MemberDAO from './dao/member.dao';
import UserResource from './resource/user.resource';

class App {
  public express
  public memberService = new MemberService(new MemberDAO());

  constructor() {
    this.initialize();
  }

  private initialize(): void {
    console.log(`Initializing App`);
    console.log(`Starting Express`);
    this.express = express();
    this.mountRoutes();
  }

  private mountRoutes(): void {
    console.log(`Setting up routes`);
    const router = express.Router()
    router.get('/', (req, res) => {
      res.json({
        status: 'running'
      })
    });
    new UserResource(router, "/user");
    this.express.use('/', router)
  }
}

export default new App().express