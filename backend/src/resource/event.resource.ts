import BasicDAO from '../dao/basic.dao';
import { Router } from 'express-serve-static-core';
import { EventResourceConfig } from '../../../shared/endpoints/events';
import BasicResource from './basic.resource';
import EventService from '../service/event.service';
import { Event } from '../../../shared/model/event';
import { DB_NAME_EVENT } from '../../constants/collection-names';

class EventResource extends BasicResource<Event> {
  public service = new EventService(new BasicDAO<Event>(DB_NAME_EVENT));

  constructor(router: Router) {
    super(EventResourceConfig, router);
  };

}

export default EventResource;