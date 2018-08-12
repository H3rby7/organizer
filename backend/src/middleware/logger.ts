import { NextFunction } from 'express'
import { Request } from './request'
import { RequestHandler } from 'express-serve-static-core';
import * as logger from 'winston';

const middleware: RequestHandler = (req: Request, res: Express.Response, next: NextFunction) => {
  logger.info('Incoming request {}', req.originalUrl);
  next();
}

export default middleware;