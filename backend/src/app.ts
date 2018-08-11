import * as express from 'express'
import MemberService from './service/member.service';
import MemberDAO from './dao/member.dao';

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
        message: 'Hello World!'
      })
    });
    router.get('/count', (req, res) => {
      this.memberService.getUserCount()
        .then(data => res.status(200).json({count: data}))
        .catch(e => {
          res.sendStatus(500);
          console.log(e);
        });
    });
    router.get('/users', (req, res) => {
      this.memberService.getAllUsers()
        .then(data => res.status(200).json({users: data}))
        .catch(e => {
          res.sendStatus(500);
          console.log(e);
        });
    });
    this.express.use('/', router)
  }
}

export default new App().express