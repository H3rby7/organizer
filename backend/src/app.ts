import * as express from 'express'
import MemberResource from './resource/member.resource';
import middleware from './middleware';
import logger from './logger';
import ParticipationResource from './resource/participation.resource';
import EventResource from './resource/event.resource';


class App {
  public express

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
    new MemberResource(router);
    new EventResource(router);
    new ParticipationResource(router);
    middleware(this.express);
    this.express.use('/', router);
  }
}

export default new App().express