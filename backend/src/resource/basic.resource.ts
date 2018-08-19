import { Router } from 'express-serve-static-core';
import logger from '../logger';
import BasicService from '../service/basic.service';
import { BasicResourceIf } from '../../../shared/endpoints/basic';

class BasicResource<T> {
  public service: BasicService<T>;

  constructor(name: string, config: BasicResourceIf, router: Router) {
    const path = config.baseUrl;
    const ePs = config.endpoints;
    logger.info(`Binding ${name}Resource to: '${path}'`)
    router[ePs.ALL.method](`${path}${ePs.ALL.path}`, this.getAll.bind(this));
    router[ePs.COUNT.method](`${path}${ePs.COUNT.path}`, this.count.bind(this));
    router[ePs.ADD.method](`${path}${ePs.ADD.path}`, this.addNew.bind(this));
    router[ePs.GET_BY_ID.method](`${path}${ePs.GET_BY_ID.path}`, this.getOneById.bind(this));
    router[ePs.UPDATE.method](`${path}${ePs.UPDATE.path}`, this.update.bind(this));
    router[ePs.DELETE.method](`${path}${ePs.DELETE.path}`, this.deleteOneById.bind(this));
  };

  count(req, res) {
    this.service.getCount()
      .then(data => res.status(200).json(data))
      .catch(e => {
        res.sendStatus(500);
        logger.error(e);
      });
  }

  getAll(req, res) {
    this.service.getAll()
      .then(data => res.status(200).json(data))
      .catch(e => {
        res.sendStatus(500);
        logger.error(e);
      });
  }

  getOneById(req, res) {
    this.service.getById(req.params.id)
      .then(data => res.status(200).json(data))
      .catch(e => {
        res.sendStatus(500);
        logger.error(e);
      });
  }

  deleteOneById(req, res) {
    this.service.deleteById(req.params.id)
      .then(data => res.status(200).json(data))
      .catch(e => {
        res.sendStatus(500);
        logger.error(e);
      });
  }

  addNew(req, res) {
    this.service.createNew(req.body as T)
      .then(data => res.status(200).json(data))
      .catch(e => {
        res.sendStatus(500);
        logger.error(e);
      });
  }

  update(req, res) {
    this.service.updateById(req.params.id, req.body as T)
      .then(data => res.status(200).json(data))
      .catch(e => {
        res.sendStatus(500);
        logger.error(e);
      });
  }

}

export default BasicResource;