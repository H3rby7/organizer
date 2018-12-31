import BasicDAO from '../dao/basic.dao';
import { Router } from 'express-serve-static-core';
import { EventResourceConfig } from '../../../shared/endpoints/events';
import BasicResource from './basic.resource';
import EventService from '../service/shows.service';
import { Event } from '../../../shared/model/event';

class EventResource extends BasicResource<Event> {
  public service = new EventService(new BasicDAO<Event>('events'));

  constructor(router: Router) {
    super(EventResourceConfig, router);
  };

}

export default EventResource;