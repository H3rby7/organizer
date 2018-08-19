import BasicDAO from '../dao/basic.dao';
import { Router } from 'express-serve-static-core';
import { ShowsResourceConfig } from '../../../shared/endpoints/shows';
import BasicResource from './basic.resource';
import ShowsService from '../service/shows.service';
import { Show } from '../../../shared/model/show';

class ShowsResource extends BasicResource<Show> {
  public service = new ShowsService(new BasicDAO<Show>('shows'));

  constructor(router: Router) {
    super(ShowsResourceConfig, router);
  };

}

export default ShowsResource;