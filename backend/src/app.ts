import * as express from 'express'
import MemberService from './service/member.service';
import MemberDAO from './dao/member.dao';
import MemberResource from './resource/member.resource';
import middleware from './middleware';
import logger from './logger';


class App {
  public express
  public memberService = new MemberService(new MemberDAO());

  constructor() {
    this.initialize();
  }

  private initialize(): void {
    logger.info(`Initializing App`);
    this.express = express();
    this.mountRoutes();
  }

  private mountRoutes(): void {
    logger.info(`Setting up routes`);
    const router = express.Router();
    router.get('/api', (req, res) => {
      res.json({
        status: 'running'
      })
    });
    new MemberResource(router, '/api/member');
    middleware(this.express);
    this.express.use('/', router);
  }
}

export default new App().express