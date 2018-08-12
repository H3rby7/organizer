import { v1 as uuid } from 'uuid';
import { NextFunction } from 'express'
import { Request } from './request'
import { RequestHandler } from 'express-serve-static-core';

const middleware: RequestHandler = (req: Request, res: Express.Response, next: NextFunction) => {
  req.uuid = uuid();
  next();
}

export default middleware;