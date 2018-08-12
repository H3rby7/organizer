import { NextFunction } from 'express'
import { Request } from './request'
import { RequestHandler } from 'express-serve-static-core';
import logger from '../logger';

const middleware: RequestHandler = (req: Request, res: Express.Response, next: NextFunction) => {
  logger.debug('Incoming request');
  next();
}

export default middleware;