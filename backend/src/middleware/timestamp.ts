import { NextFunction } from 'express'
import { Request } from './request'
import { RequestHandler } from 'express-serve-static-core';

const middleware: RequestHandler = (req: Request, res: Express.Response, next: NextFunction) => {
  req.timestamp = new Date();
  next();
}

export default middleware;